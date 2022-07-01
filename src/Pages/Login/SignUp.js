import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);

      const navigate = useNavigate();

      let signInError;

      if(loading || gLoading || updating){
          return <Loading></Loading>
      }

      if(error || gError || UpdateError){
          signInError = <p className='text-red-500'><small>{error?.message || gError?.message ||  UpdateError?.message}</small></p>
      }

    if (token) {
        navigate('/appointment');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        console.log('update done');        
    }

    return (
        <div className='flex h-screen justify-center items-center bg-indigo-600'>
        <div className="card w-96 bg-indigo-500 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font bold text-white">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}                                
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}                                
                        </label>
                    </div>

                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Sign up" />
                </form>
                <p><small className='text-white'>Already have an account? <Link className='text-secondary-focus' to="/login">Please login</Link></small></p>
                <div className='divider text-white'>OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white">Continue with Google</button>
            </div>
        </div>
    </div>
    );
};

export default SignUp;