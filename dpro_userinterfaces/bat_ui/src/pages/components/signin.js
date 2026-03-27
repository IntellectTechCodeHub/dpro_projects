'use client';

import { SiMinutemailer, SiFsecure } from "react-icons/si";
import { GrView, GrFormViewHide } from "react-icons/gr";
import { useState } from "react";
import Image from "next/image";
import SaveDataValues from "./data save/savedatavalues";
import retreiveData from "./data retrieval/retrievedata.js";
import { formatUrl } from "../../app/helpers/httputility.js";

let serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL + 'UserAuthentication';
let serviceUrl_Users = process.env.NEXT_PUBLIC_SERVICE_URL + 'userByEmail';

export default function Signin({onComplete}) {
    
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isActiveUser, setIsActiveUser] = useState(true);
    const [isUserSignedIn, setIsUserSignedin] = useState(false);
    const [signinFormData, setSigninFormData] = useState();
    const [isSigninFormComplete, setIsSigninFormComplete] = useState(false);
    const changeViewPass = () => { setIsPassVisible(!isPassVisible) };

    let saveType = ['Signin User Authentication'];

    let retrieveUser = async (email) => {

            let dataObj = {email: email};

            let url = formatUrl('Signin User', serviceUrl_Users, dataObj);

            let user = { email: 'admin@theintellecttech.com', pass: 'anify' }; 
            
            let userAccount = await retreiveData(url);

           if(userAccount !== undefined)
                user = userAccount.then((res) => res.json());

            console.log(user);

            return(user);
    };

    const onFormComplete = (e) => { 
        //e.preventTarget();
        alert('user signed in');
    
        let form = e.target;
        let formData = new FormData(form);
        let dataJson = Object.fromEntries(formData);

        let obj = {
            'userAuthenticationId': 'User-Authentication-' + crypto.randomUUID(),
            'userDocumentId': '000-000-000',
            'signinEmail': dataJson["email"],
            'signinPass': dataJson["password"],
            'userAuthenticated': false,
            'userAuthenticationCreatedDate': Date.now().toString(),
            'userAuthenticationIsActive': true
        };

        let user = retrieveUser(obj.signinEmail, obj.signinPass);
        let isActiveUser = obj.signinEmail === user.email && obj.signinPass === user.pass;
        console.log('verified: ' + isActiveUser);
        if(isActiveUser){
            setIsActiveUser(true);
            obj.userAuthenticated = true;
        }
        
        console.log(obj);

        setSigninFormData(obj);
        setIsSigninFormComplete(true);
    };

    const onCompleteButton = () => {
        alert('sign-in button click');
    };

    let SigninForm = () => {
        return (
            <div className="w-full h-screen flex items-center justify">
                <div className="w-[40%] p-10 bg-silver-900 flex-col flex items-center gap-x-4 gap-y-2 rounded-xl shadow-slate-100 shadow-md">
                    <Image src="/logo.png" alt="logo" classname="md-10 md:md-14" />
                    <h1 className="text-xl md:text-lg font-bold"> Sign-in to DiscoverPro </h1>
                </div>
                <form method="post" action onSubmit={onFormComplete} className="w-full mx-10% items-center justify-evenly">
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
                        <button name="signin" type='submit' onClick={ onCompleteButton } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm">Signin</button>
                    </div>
                </form>
            </div>
        );
    };

    let pageContent = <div className="w-full h-screen flex items-center justify"><SigninForm /></div>;
    if(isSigninFormComplete && isActiveUser){
        pageContent = 
            <SaveDataValues type={saveType[0]} url={serviceUrl} data={signinFormData} eventCallback={onComplete}/>;
    }

    return(pageContent);
}