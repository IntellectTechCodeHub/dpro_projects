'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './elements/button';
import Navbar from './navbar';

const Header = ({isUserSignedIn, onComplete}) => {

  let [buttonText, setButtonText] = useState('Sign-in');
  
  const onButtonClick = () => {
    alert(isUserSignedIn);
    setButtonText(!isUserSignedIn ? "Sign-in" : "Sign-out");
    onComplete(isUserSignedIn ? 'register' : 'signin');
    alert(buttonText);
  }

  console.log('header: ' + JSON.stringify(isUserSignedIn));

  let onLinkClick = (linkClicked) => {
    console.log('link: ' + linkClicked);
    onComplete(linkClicked);
  }

  return (
    <div className="fixed bg-slate-700 w-full h-20 z-20 align-top top-0 left-0">
      <div className="flex w-[full] h-20 items-center">
        <a href="#hero" className='block w-[full] h-[70%] m-[2.5%] flex-col text-center items-center' alt="link to hero">
          <Image src="/logo.png" className='logo' alt="logo"></Image>
        </a>
        
        { isUserSignedIn ? <Navbar onLinkClick={(linkClicked) => onLinkClick(linkClicked)} /> : "" }

        <div className='top-0 left-0 bottom-0 right-0 mt-[2] mr-[2] flex'>
          { 
            !isUserSignedIn ? 
                <a onClick={ () => { onComplete('register')} } className="w-[full] h-[70%] m-[2.5%] transition-colors justify-center text-sm font-semibold font-mono text-white"> register </a> : '' 
          }

          <Button onClick={onButtonClick} imageClass="w-[120] h-[60] inline-flex" source="/button.png" textDivClass="mt-5" textClass="text-white" text={buttonText} className="flex w-[120] h-[60]">
          </Button>
        </div>
        
      </div>
            
    </div>
  )
};

export default Header;
