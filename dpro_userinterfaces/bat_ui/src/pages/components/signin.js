'use client';

import { SiMinutemailer, SiFsecure } from "react-icons/si";
import { GrView, GrFormViewHide } from "react-icons/gr";
import { useState } from "react";
import Image from "next/image";

export default function Signin ({onComplete}) {
    
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isUserSignedIn, setIsUserSignedin] = useState(false);
    const changeViewPass = () => { setIsPassVisible(!isPassVisible) };
    const onCompleteButton = () => { 
        alert('user signed in');
        onComplete();
    };

    return(
        <div className="w-full h-screen flex items-center justify">
            <div className="w-[40%] p-10 bg-silver-900 flex-col flex items-center gap-x-4 gap-y-2 rounded-xl shadow-slate-100 shadow-md">
                <Image src="/logo.png" alt="logo" classname="md-10 md:md-14" />
                <h1 className="text-xl md:text-lg font-bold"> Sign-in to DiscoverPro </h1>
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
                <button name="signin" onClick={ onCompleteButton } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm">Signin</button>
                
            </div>
        </div>
    );
}