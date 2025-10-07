import React from 'react';
import Image from 'next/image';

const ButtonImage = ({source, textClass, text, imageClass, textDivClass}) => {
  
  const imageClassOptions = `w-full m-[2.5%] p-[1%] text-center justify-center ${imageClass || ""}`;
  const textDivClassOptions = `w-full absolute top-0 left-0 text-center ${textDivClass || ""}`;
  const textClassOptions = `font-bold text-center ${textClass || ""}`;
 
  return (
    <div>
        <div className='relative text-center'>
            <Image src={source} alt="button image" className={imageClassOptions}></Image>
            <div className={textDivClassOptions}>
                <p className={textClassOptions}> { text } </p>
            </div>
        </div>
    </div>
  )
}

export default ButtonImage;
