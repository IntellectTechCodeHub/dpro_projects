'use client';

import { useState } from 'react';

const Problem = () => {
    let num = 0;
    
    function suggestionInfo() {
        num = num + 1;
        return <input name={ "Suggestion" + (num + 1 ) } type="text" placeholder="Suggestion" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />;
    }
    
    const [suggestions, setSuggestions] = useState([suggestionInfo(), suggestionInfo()]);
    
    let suggestionElements = suggestions;
    let suggestionItems = suggestionElements.map(se => <div key={crypto.randomUUID()} className='bg-slate-100 m-[2.5%] w-full flex items-center'>{se}</div>);

    return(
        <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
            <p className="text-black text-xl text-bold text-center"> Problem </p>
            <p className="m-[2.5%] text-black text-md text-center text-bold">Instructions: Use this form to collect analysis info. Use the requirement fields to input solution requirements. The add and remove buttons will place additional requirements on the screen or remove a requirement. </p>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Problem Name" type="text" placeholder="Problem Name" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Problem Description" type="text" placeholder="Problem Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            { suggestionItems }
        </div>
    );
}
export default Problem;