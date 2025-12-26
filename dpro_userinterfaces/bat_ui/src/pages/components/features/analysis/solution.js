'use client';

import { useState } from 'react';
import Button from '../../elements/button';
import SolutionSuggestions from '../../../../app/components/features/analysis/suggestions/solutionSuggestions.js';

const Solution = () => {

    // var num = 0;

    // function solutionInfo() {
    //     num = num + 1;
    //     return <input name={"Requirement" + (num + 1) } type="text" placeholder="Requirement" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />;
    // }

    // const [solutions, setSolutions] = useState([solutionInfo(), solutionInfo()]);

    // var solutionElements = solutions;

    // function addSolutionElement(){
    //     solutionElements.push(solutionInfo());
    //     setSolutions(solutionElements);
    // }

    // function removeSolutionElement(){
    //     solutionElements.pop();
    //     setSolutions(solutionElements);
    // }
    
    // var solutionItems = solutionElements.map(se => <div key={crypto.randomUUID()} className='bg-slate-100 m-[2.5%] w-full flex items-center'>{se}</div>);

    return(
        <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
            <p className="text-black text-xl text-bold text-center"> Solution </p>
            {/* <SolutionSuggestions solutionsList={ solutions } /> */}
            <p className="m-[2.5%] text-black text-xl text-bold text-center">Instructions: This section is intended to gather requirements and goals for solution services architecture.</p>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Solution Name" type="text" placeholder="Solution Name" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Analysis Document Id" type="text" placeholder="Analysis Document Id" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Problem Document Id" type="text" placeholder="Problem Document" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className='bg-slate-100 m-[2.5%] w-full flex items-center'>
                <input name="Solution Description" type="text" placeholder="Solution Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            {/* { solutionItems } */}
            {/* <p className="m-[2.5%] text-black text-xl text-bold text-center"> The add and remove buttons will place an additional requirement on the screen or remove an existing requirement. </p>
            <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
                <Button onClick={ addSolutionElement } className="w-full h-[50] m-[2.5%] font-bold items-center justify-center rounded-sm" > Add Solution + </Button>
            </div>
            <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
                {
                    solutionElements.length > 1 ? <Button onClick={ removeSolutionElement } className="w-full h-[50] m-[2.5%] font-bold items-center justify-center rounded-sm" > Remove Solution - </Button> : "" 
                }
            </div> */}   
        </div>
    );
}

export default Solution;