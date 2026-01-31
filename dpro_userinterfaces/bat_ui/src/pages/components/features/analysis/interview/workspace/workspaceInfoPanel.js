const WorkspaceInfoPanel = () => {

    const infoPanel =
        <div className='flex flex-col w-full h-auto'>  
            <div className="m-[2.5%] text-bold text-lg text-center items-center">
                <h2 className="text-3xl m-[2.5%] text-green-700 font-semibold"> DiscoverPro </h2>
                <h3 className="text-7xl m-[2.5%] text-red-900"> Anify </h3>
            </div>
            <div className="flex w-full h-[300] bg-white items-center">
                <p className="text-black m-[2.5%] text-lg text-center items-center justify-evenly"> 
                    "Anify" the process or workflow and determine if there are available 
                    digital solutions, select digital policies, and chose from policy 
                    recommendations provided in the GenAI inferencing tool. 
                </p>
                <div className='w-[320] h-auto m-[2.5%] bg-slate-700 items-center justify-center'>
                    <video src='/DiscoverPRO(IntellectTech,LLC).mp4' title='DiscoverPRO(Intellect Tech, LLC)' allowFullScreen />
                </div>
            </div>
            <p className='text-black m-[2.5%] text-sm font-semibold'> 
                The analysis process is similar to
                the scientific process described in the video, however,
                using the DiscoverPRO Anify feature an analyst facilitates 
                the process for information gathering (i.e. questions that 
                identify problems with workflows or processes, requirements 
                and specifications for developing digital services solutions.)
            </p>
            <p className="text-green-700 m-[2.5%] text-lg text-center items-center justify-evenly">
                Anify is the analysis interview feature for identifying 
                problems or issues, selecting digital solutions and a professional
                developer that design the architecture.
            </p>
        </div>;

    return(<div className='w-full h-auto'> { infoPanel } </div>);
}

export default WorkspaceInfoPanel;