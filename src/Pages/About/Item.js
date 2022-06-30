import React from 'react';
import { FcCheckmark } from 'react-icons/fa';

const Item = ({ text, check, onCheck }) => {
    return (
        <div id="item" className="flex flex-row bg-yellow-200 m-1 p-2 rounded-md">
            <div id="item_text" className="basis-3/4 text-lg">
                {text}
            </div>
            <div id="item_icon" className="basis-1/4 grid" onClick={() => onCheck(text)}>
                {check ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }
            </div>
        </div>
    );
};

export default Item;