'use client';

import React, { useState } from "react";
import Header from "../../header";
import Section from "../../elements/section"
import Footer from "../../footer";
import Register from "../../register";
import Signin from "../../signin";
import Business from "../business";
import Workflow from "../workflow/workflow";
import InterviewModule from "../analysis/interview/interviewModule";
//import UserSetting from "../../usersetting";

const DiscoverPro = () => {
    let [appPage, setAppPage] = useState('register');
    let [headerInteraction, setHeaderInteraction] = useState('');
    let [authenticateduSER, setAuthenticateduSER] = useState(false);


    let pageContent = <div>Welcome to DiscoverPro.</div>;

    switch(appPage){
        case 'register':
            pageContent = <Register onComplete = { () => { setAppPage('signin') } } />;
            break;
        case 'signin':
            pageContent = <Signin onComplete = { () => { setAppPage('business') }} />;
            break;
        case 'business':
            pageContent = <Business onComplete = { () => { setAppPage('workflow') }} />;
            break;
        case 'workflow':
            pageContent = <Workflow onComplete = { () => { setAppPage('analysis') }} />;
            break;
        case 'analysis':
            pageContent = <InterviewModule onComplete = { () => { setAppPage('business')}} />;
            break;
        default:
            break;
    }

    let headerNavBar = (navBarClick) => {
        console.log(navBarClick);
        setAppPage(navBarClick);
    }

    let signinButtonClick = () => {
        setAppPage('signin');
    }

    let signedinFeatures = ['business', 'workflow', 'analysis'];
    let arrayFunction = (value, index, array) => {
        return value === appPage ? value : undefined;
    }
    let isSignedInFeature = signedinFeatures.find(arrayFunction);
    
    let PageUI = () => {
        return(
            <div className="block flex flex-col">
              <div className="flex flex-col w-full">
                <Header isUserSignedIn={ isSignedInFeature !== undefined ? true : false } onComplete={ (navBarClick) => headerNavBar(navBarClick) } />
                <div className="flex flex-col mt-[90] w-full items-center justify-evenly">
                    { 
                        appPage === 'register' ? 
                            <div className='w-full h-auto m-[2.5%]'>
                                <button name="register" onClick={ signinButtonClick } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm">Already Registered? Sign-in</button>
                            </div> : ''
                    }  
                    {
                      pageContent
                    }
                </div>
              </div>
              <div className="flex flex-col w-full"> 
                <footer className="flex flex-col w-full my-[2.5%] gap-[1px] text-xs font-bold items-center justify-center">
                    <Section className="m-[2.5%] opacity-50 shadow-cyan-600" ></Section>
                      <Footer />
                  </footer>
              </div>
            </div>
        );
    }

  return (<PageUI />);
}

export default DiscoverPro;