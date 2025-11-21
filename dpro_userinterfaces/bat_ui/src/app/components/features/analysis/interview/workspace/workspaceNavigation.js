import React from "react";

export const WorkspaceNavigation = () => {
    let links = [{address: '#', id: 1}, {address: '#', id: 2}, {address: '#', id: 3}];
    return (
        <div className="bg-slate-200 flex flex-col w-full m-[2.5%] items-center justify-evenly">
            <div className="text-bold text-lg">
                <h2> Navigation</h2>
                <div className='flex flex-col'> 
                    {   
                        links.map(link => { return <div key={link.id} className="m-[2.5%]"><a key={'link' + link.id} href={link.address}> nav link {link.id} </a></div>})
                    }
                </div>
            </div>
        </div>
    );
}