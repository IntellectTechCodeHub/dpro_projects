import Image from 'next/image';
import React from 'react';

const Section = ({ image, height, width, className, alternateText }) => {
    
    const classOptions = `bg-black-400 items-center justify-center ${width || "w-full"} ${height || "h-4"} ${className || ""}`;
    
   // alert(classOptions);

    const renderSeparator = () => (
        <div className={classOptions}></div>
    );
    
    const renderImage = () => (
        <Image src={image} height={height} width={width} className={className} alt={alternateText}></Image>
    );

  return image ? renderImage() : renderSeparator();
};

export default Section;
