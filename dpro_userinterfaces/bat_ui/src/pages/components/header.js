'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './elements/button';
import Navbar from './navbar';

const Header = () => {

  let [buttonText, setButtonText] = useState('Sign-in');
  let [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const onButtonClick = () => {
    alert(isUserSignedIn);
    setButtonText(isUserSignedIn ? "Sign-in" : "Sign-out");
    setIsUserSignedIn(isUserSignedIn ? false : true);
    alert(buttonText);
  }

  return (
    <div className="fixed bg-slate-700 w-full h-20 z-20 align-top top-0 left-0">
      <div className="flex w-[full] h-20 items-center">
        <a href="#hero" className='block w-[full] h-[70%] m-[2.5%] flex-col text-center items-center' alt="link to hero">
          <Image src="/logo.png" className='logo' alt="logo"></Image>
        </a>
        
        { isUserSignedIn ? <Navbar /> : "" }

        <div className='top-0 left-0 bottom-0 right-0 mt-[2] mr-[2]'>
          {/* <a href="#register" className="w-[full] h-[70%] m-[2.5%] transition-colors justify-center"> */}
            <Button onClick={onButtonClick} imageClass="w-[120] h-[60] inline-flex" source="/button.png" textDivClass="mt-5" textClass="text-white" text={buttonText} className="flex w-[120] h-[60]">
            </Button>
          {/* </a> */}
        </div>
        
      </div>
            
    </div>
  )
}
;

export default Header;
