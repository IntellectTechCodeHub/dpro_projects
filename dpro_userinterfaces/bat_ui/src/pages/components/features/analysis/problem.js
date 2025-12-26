'use client';

import { useState } from 'react';
import Button from '../../elements/button';
import ProblemSuggestions from '../../../../app/components/features/analysis/suggestions/problemSuggestions.js';

const Problem = () => {

    let num = 0;
    
    function suggestionInfo() {
        num = num + 1;
        return <input name={ "Suggestion" + (num + 1 ) } type="text" placeholder="Suggestion" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />;
    }
    
    const [suggestions, setSuggestions] = useState([suggestionInfo(), suggestionInfo()]);
    
    let suggestionElements = suggestions;

    function addSuggestionElement(){
        alert('add problem');
        suggestionElements.push(suggestionInfo());
        alert(suggestionElements.length);
        setProblems(suggestionElements);
        alert(suggestions.length);
    }

    function removeSuggestionElement(){
        suggestionElements.pop();
        setSuggestions(suggestionElements);
    }
    
    let suggestionItems = suggestionElements.map(se => <div key={crypto.randomUUID()} className='bg-slate-100 m-[2.5%] w-full flex items-center'>{se}</div>);

    return(
        <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
            <p className="text-black text-xl text-bold text-center"> Problem </p>
            {/* <ProblemSuggestions problemsList={ problems } /> */}
            <p className="m-[2.5%] text-black text-md text-center text-bold">Instructions: Use this form to collect analysis info. Use the requirement fields to input solution requirements. The add and remove buttons will place additional requirements on the screen or remove a requirement. </p>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Problem Name" type="text" placeholder="Problem Name" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Problem Description" type="text" placeholder="Problem Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            { suggestionItems }
            {/* <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
                <Button onClick={ addSuggestionElement } className="w-full h-[50] m-[2.5%] font-bold items-center justify-center rounded-sm" > Add Problem + </Button>
            </div>
            <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
                {
                    suggestionElements.length > 1 ? <Button onClick={ removeSuggestionElement } className="w-full h-[50] m-[2.5%] font-bold items-center justify-center rounded-sm" > Remove Problem - </Button> : "" 
                }
            </div> */}
        </div>
    );
}

export default Problem;