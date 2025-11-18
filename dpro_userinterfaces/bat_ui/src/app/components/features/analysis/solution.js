'use client';

const Solution = () => {
    return(
        <div className="w-full m-[2.5%] flex flex-col items-center justify-evenly">
            <p className="text-black text-xl text-bold text-center"> Solution </p>
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
        </div>
    );
}
export default Solution;