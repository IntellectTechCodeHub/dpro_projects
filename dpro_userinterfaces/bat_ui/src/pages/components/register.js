'use client';

import { SiMinutemailer, SiFsecure } from "react-icons/si";
import { GrView, GrFormViewHide } from "react-icons/gr";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

export default function Register () {
    
    const [isPassVisible, setIsPassVisible] = useState(false);
    const changeViewPass = () => { setIsPassVisible(!isPassVisible) };
    const onCompleteButton = () => { alert('user registered') };

    return(
        <div className="w-full h-screen flex items-center justify">
            <div className="w-[40%] p-10 bg-silver-900 flex-col flex items-center gap-x-4 gap-y-2 rounded-xl shadow-slate-100 shadow-md">
                <Image src="/logo.png" alt="logo" classname="md-10 md:md-14" />
                <h1 className="text-lg md:text-lg font-bold"> Register </h1>
                <p className="text-md md:txt-sm text-black-400 text-center"> Complete user sign-up as a <span className="text-silver"> business rep, team, or analyst. </span></p>    
            </div>
            <div className="w-full flex flex-col gap-3 justify-around">
                <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                    <SiMinutemailer className=" mx-[2.5%] w-[7%] h-[7%]"/>
                    <input name="email" type="email" placeholder="Email" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                </div>
                <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                    <SiFsecure className=" mx-[2.5%] w-[7%] h-[7%]"/>
                    <input name="password" type={ isPassVisible ? "text" : "password" } placeholder="Password" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                    { isPassVisible ? <GrFormViewHide onClick={ changeViewPass } className="mx-[2.5%] w-[7%] h-[7%]"/> : <GrView onClick={ changeViewPass } className="mx-[2.5%] w-[7%] h-[7%]"/>}
                </div>
                <button name="register" onClick={ onCompleteButton } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm">Complete Registration</button>
                <div className="bg-gray-200 w-full h-full flex items-center justify-around">
                    <div className="w-[66%] h-[1px] bg-slate-700"></div>
                    <h1 className="text-gray p-4 font-extrabold"> Or </h1>
                    <div className="w-[66%] h-[1px] bg-slate-700"></div>
                </div>
                <div name="altregister" className="bg-gray-200 w-full flex items-center py-10 justify-around md:px-10 lg: px-4 rounded-sm">
                    <div classname="w-full bg-gray-500">
                        <FaLinkedin className="p-[2] w-[50] h-[50] text-lg md:text-xl" />
                    </div>
                    <div classname="w-[70%] h-[70%] bg-black-200 hover:bg-gray-400 cursor-pointer rounded-full">
                        <FaXTwitter className="p-[2] w-[50] h-[50] text-lg md:text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}