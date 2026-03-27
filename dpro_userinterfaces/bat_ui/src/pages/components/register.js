'use client';

import { SiMinutemailer, SiFsecure, SiCircleci, SiPhoton } from "react-icons/si";
import { GrView, GrFormViewHide } from "react-icons/gr";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import SaveDataValues from "./data save/savedatavalues";

let serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL + 'users';

export default function Register ({onComplete}) {
    
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isUserRegisterComplete, setIsUserRegisterComplete] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [formData, setFormData] = useState();

    const changeViewPass = () => { setIsPassVisible(!isPassVisible) };
    const onCompleteButton = () => { 
        alert('user registered');
    };

    let saveTypes = ['Register'];

    let onFormComplete = (e) => {
        alert('register complete');
        //e.preventTarget();

        let form = e.target;
        let formData = new FormData(form);
        let dataJson = Object.fromEntries(formData);
        
        console.log(dataJson);

        let dataObj = {
            userId: 'User- ' + crypto.randomUUID(),
            name: dataJson['user'],
            email: dataJson['email'],
            password: dataJson['password'],
            phone: dataJson['phone'],
            isActive: true
        }

        setIsFormComplete(true);
        setFormData(dataObj);
    }

    let registerContent =
        <form action onSubmit={onFormComplete} class=''>
            <div className="w-full h-screen flex items-center justify">
                <div className="w-[40%] p-10 bg-silver-900 flex-col flex items-center gap-x-4 gap-y-2 rounded-xl shadow-slate-100 shadow-md">
                    <Image src="/logo.png" alt="logo" classname="md-10 md:md-14" />
                    <h1 className="text-xl md:text-lg font-bold"> Register for a DiscoverPro subscription </h1>
                    <p className="text-md md:txt-sm text-black-400 text-center"> Complete user sign-up as a <span className="text-silver"> business rep, team, or analyst. </span></p>    
                </div>
                <div className="w-full flex flex-col gap-3 justify-around">
                    <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                        <SiCircleci className=" mx-[2.5%] w-[7%] h-[7%]"/>
                        <input name="user" type="user" placeholder="Name" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                    </div>
                    <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                        <SiMinutemailer className=" mx-[2.5%] w-[7%] h-[7%]"/>
                        <input name="email" type="email" placeholder="Email" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                    </div>
                    <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                        <SiFsecure className=" mx-[2.5%] w-[7%] h-[7%]"/>
                        <input name="password" type={ isPassVisible ? "text" : "password" } placeholder="Password" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                        { isPassVisible ? <GrFormViewHide onClick={ changeViewPass } className="mx-[2.5%] w-[7%] h-[7%]"/> : <GrView onClick={ changeViewPass } className="mx-[2.5%] w-[7%] h-[7%]"/>}
                    </div>
                    <div className="bg-slate-100 w-full flex items-center shadow-10 text-gray-700 justify-evenly rounded-sm">
                        <SiPhoton className=" mx-[2.5%] w-[7%] h-[7%]"/>
                        <input name="phone" type="phone" placeholder="Phone" className="bg-transparent w-full h-[50px] outline-none font-medium rounded-sm"></input>
                    </div>
                    <button name="register" type='submit' onClick={ onCompleteButton } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm">Complete Registration</button>
                    {/* <div className="bg-gray-200 w-full h-full flex items-center justify-around">
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
                    </div> */}
                </div>
            </div>
        </form>;

    let pageContent = <div></div>;

    if(!isFormComplete)
        pageContent = registerContent;
    
    if(isFormComplete && formData !== undefined)
        pageContent = <SaveDataValues type={saveTypes[0]} url={serviceUrl} data={formData} eventCallback={onComplete} />;
    
    return(pageContent);
}