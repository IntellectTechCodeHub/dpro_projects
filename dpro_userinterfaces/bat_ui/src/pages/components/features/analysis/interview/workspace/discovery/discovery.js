import React from 'react';
import { IoMdFlag, IoMdBulb, IoMdHappy, IoMdWarning, IoMdLink, IoMdConstruct, IoMdSpeedometer, IoMdStar, 
                IoMdThumbsUp, IoMdAdd, IoMdLaptop, IoMdCalculator, IoMdBrowsers } from "react-icons/io";

const Discovery = () => {

    let InterviewDiscovery = 
        <div className="w-full"> 
            <div className="componentDiv">
                <p>Issues</p>
                <div className="textInputDiv">
                    <IoMdFlag className="textInputImage" />
                    <label for="Challenge" className="text-black m-[2.5%] font-bold"> Biggest challenge </label>
                    <input name="Challenge" type='text' className="textInput" placeholder="Describe problems or issues"/>
                </div>
                <div className="textInputDiv">
                    <IoMdBulb className="textInputImage" />
                    <label for="Solution" className="text-black m-[2.5%] font-bold"> Solution or current approach </label>
                    <input name="Solution" type='text' className="textInput" placeholder="Describe the current solution"/>
                </div>
                <div className="textInputDiv">
                    <IoMdHappy className="textInputImage" />
                    <label for="Preferred Solution" className="text-black m-[2.5%] font-bold"> Preferred solution </label>
                    <input name="Preferred Solution" type='text' className="textInput" placeholder="Describe the ideal solution"/>
                </div>
                <div className="textInputDiv">
                    <IoMdWarning className="textInputImage" />
                    <label for="Blockers" className="text-black m-[2.5%] font-bold"> Blockers </label>
                    <input name="Blockers" type='text' className="textInput" placeholder="Describe obstacles or blockers"/>
                </div>
            </div>
            <div className="componentDiv">
                <p>Discovery</p>
                <div className="textInputDiv">
                    <IoMdLink className="textInputImage" />
                    <label for="Integrations" className="text-black m-[2.5%] font-bold"> Integrations </label>
                    <input name="Integrations" type='text' className="textInput" placeholder="Does the solution require integrations?"/>
                </div>
                <div className="textInputDiv">
                    <IoMdConstruct className="textInputImage" />
                    <label for="Usability" className="text-black m-[2.5%] font-bold"> Usability </label>
                    <input name="Usability" type='text' className="textInput" placeholder="Are their usability issues?" />
                </div>
                <div className="textInputDiv">
                    <IoMdSpeedometer className="textInputImage" />
                    <label for="Performance" className="text-black m-[2.5%] font-bold"> Performance </label>
                    <input name="Performance" type='text' className="textInput" placeholder="Is the performance lagging?" />
                </div>
                <div className="textInputDiv">
                    <IoMdStar className="textInputImage" />
                    <label for="Feature" className="text-black m-[2.5%] font-bold"> Features </label>
                    <input name="Feature" type='text' className="textInput" placeholder="Do features have required functionality?" />
                </div>
                <div className="textInputDiv">
                    <IoMdThumbsUp className="textInputImage" />
                    <label for="Support" className="text-black m-[2.5%] font-bold"> Support </label>
                    <input name="Support" type='text' className="textInput" placeholder="How is the customer support experience?" />
                </div>
            </div>
        </div>;

        let InterviewIndustryApplications = 
            <div className="w-full">
                <p className=""> Industry Applications </p>
                <div className="componentDiv">
                    <div className="textInputDiv">
                        <IoMdAdd className="textInputImage" />
                        <label for="Problem Improvements" className="text-black m-[2.5%] font-bold"> Problem </label>
                        <input name="Problem Improvements" type="text" className="textInput" placeholder="Current improvements" />
                    </div>
                    <div className="textInputDiv">
                        <IoMdLaptop className="textInputImage" />
                        <label for="Customers" className="text-black m-[2.5%] font-bold"> Customers </label>
                        <input name="Customers" type="text" className="textInput" placeholder="Number of similar issues" />
                    </div>
                    <div className="textInputDiv">
                        <IoMdCalculator className="textInputImage" />
                        <label for="Business Metrics" className="text-black m-[2.5%] font-bold"> Business </label>
                        <input name="Business Metrics" type="text" className="textInput" placeholder="Metrics for measuring success" />
                    </div>
                    <div className="textInputDiv">
                        <IoMdBrowsers className="textInputImage" />
                        <label for="Services" className="text-black m-[2.5%] font-bold"> Software Services </label>
                        <input name="Services" type="text" className="textInput" placeholder="Competing products or services" />
                    </div>
                </div>
            </div>;

    let PageContent = 
        <div className="componentDiv">
            { InterviewDiscovery }
            { InterviewIndustryApplications }
        </div>;

    return (
        <div className="bg-slate-100 w-full m-[2.5%] flex items-center justify-evenly">
            { PageContent }
        </div>
    );
}

export default Discovery;