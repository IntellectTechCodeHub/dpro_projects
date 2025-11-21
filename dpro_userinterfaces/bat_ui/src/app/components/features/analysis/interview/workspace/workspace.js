import React from "react";

let infoPanelName = 'Information gathering';

let infoPanel1 = 
    <div className="m-[2.5%] bg-slate-200 items-center justify-evenly">
        <div className="m-[2.5%] text-bold text-lg text-center items-center"><h2> Information panel </h2></div>
        <div className="w-full h-[300] bg-white items-center">
            <p className="m-[2.5%] text-md text-center items-center justify-evenly"> Tip of the week: Prepare for updates to software features by reading the release notes before upgrading to the latest version. </p>
        </div>
    </div>;

let infoPanel2 =
    <div className="m-[2.5%] mt-[50] bg-slate-200 items-center justify-evenly">
        <div className="m-[2.5%] text-bold text-lg text-center items-center"><h2>{ infoPanelName }</h2></div>
        <div className="h-[500] bg-white flex flex-col items-center justify-evenly">
            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center shadow-10 text-gray-700 rounded-sm">
                <div className="w-full m-[2.5%] flex bg-white"> 
                    <label for="Domain" className="m-[2.5%] text-sm text-bold">Choose your domain</label>
                    <select id="Domain" name="Domain" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm">
                        <option value="healthcare">healthcare</option>
                        <option value="finance">finance</option>
                    </select>
                </div>
                <div className="w-full m-[2.5%] flex bg-white">
                    <label for="Existing Software" className="m-[2.5%] text-sm text-bold">Select the most recent tech project</label>
                    <select id="Existing Software" name="Existing Software" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm">
                        <option value="design"> architecture design </option>
                        <option value="development"> architecture development </option>
                        <option value="custom"> custom software </option>
                        <option value="policies">digital transformation policies</option>
                        <option value="not listed"> other </option>
                    </select>
                </div>
            </div>
            <div className="w-full m-[2.5%] bg-slate-200 items-center justify-evenly">
                <div className="h-[100] m-[2.5%] text-gray items-center justify-evenly hover:bg-blue-200 rounded-sm">
                    <h2>Domain</h2>
                    <div>
                        <p> image </p>
                        <p> image </p>
                    </div>
                </div>
                <div className="h-[100] m-[2.5%] text-gray items-center justify-evenly hover:bg-blue-200 rounded-sm">
                    <h2>Analytics</h2>
                    <p> image </p>
                </div>
            </div>
        </div>
    </div>;

export const Workspace = () => {
    return (
        <div className="bg-slate-500 flex flex-col m-[2.5%] items-center justify-evenly">
            <div className="text-bold text-lg">
                <h2>Workspace</h2>
            </div>
            <div className="items-center justify-evenly">
                {infoPanel1}
            </div>
            <div className="w-full items-center justify-evenly">
                {infoPanel2}
            </div>
        </div>
    );
}