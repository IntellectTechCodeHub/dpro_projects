import React from 'react';
import { useState } from 'react';

const Navbar = () => {  
    
    let [navClickMain, setNavClickMain] = useState(false);
    let [navClickUser, setNavClickUser] = useState(false);
    let [navClickWorkflow, setNavClickWorkflow] = useState(false);
    let [navClickSettings, setNavClickSettings] = useState(false);

    const onMainClick = () => {
        setNavClickMain(true);
        setNavClickUser(false);
        setNavClickWorkflow(false); 
        setNavClickSettings(false);
      }
    
    const onUserClick = () => {
        setNavClickMain(false);
        setNavClickUser(true);
        setNavClickWorkflow(false);
        setNavClickSettings(false);
      }
    
    const onWorkflowClick = () => {
        setNavClickMain(false);
        setNavClickUser(false);
        setNavClickWorkflow(true);
        setNavClickSettings(false);
      }
    
    const onSettingsClick = () => {
        setNavClickMain(false);
        setNavClickUser(false);
        setNavClickWorkflow(false);
        setNavClickSettings(true);
      }

    let unSelectedClass = 'm-[1%] z-20 font-mono font-light sm:text-md md:text-lg lg:text-xl';
  
    let isSelectedClass = 'm-[1%] z-10 font-mono font-bold sm:text-md md:text-lg lg:text-xl';

  return (
    <div>
        <nav className="hidden fixed left-0 right-0 bottom-0 lg:static lg:flex lg:bg-transparent">
            <div className="relative flex items-center justify-evenly">
                <a name="main" onClick={onMainClick} className={navClickMain ? isSelectedClass : unSelectedClass}> Main Page </a>
                <a name="user" onClick={onUserClick} className={navClickUser ? isSelectedClass : unSelectedClass}> User Profile </a>
                <a name="workflow" onClick={onWorkflowClick} className={navClickWorkflow ? isSelectedClass : unSelectedClass}> Workflow Diagram </a>
                <a name="settings" onClick={onSettingsClick} className={navClickSettings ? isSelectedClass : unSelectedClass}> System Settings </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
