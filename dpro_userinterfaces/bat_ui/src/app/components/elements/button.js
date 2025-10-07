import React from 'react';
import ButtonImage from './buttonimage.js';

const Button = ({ type, className, onClick, children, px, href, color, imageClass, source, textDivClass, textClass, text}) => {
    
    let classOptions = `inline-flex transition-colors hover:bg-green-100 ${px || "px-2"} ${className || ""}`;

    let spanClassOptions = "relative z-10";

    let buttonImage;

    source ? buttonImage = <ButtonImage source={source} imageClass={imageClass} textDivClass={textDivClass} textClass={textClass} text={text} /> 
            : classOptions = `${ classOptions } border-3 outline-black`;
    
    const renderButton = () => (
        <button type={type} className={classOptions} onClick={onClick} >
            <span className={spanClassOptions}>{children}</span>
            {buttonImage}
        </button>
    );

    const renderLink = () => (
        <a className={classOptions} href={href}>
            <span className={spanClassOptions}>{children}</span>
            {buttonImage}
        </a>
    );

  return href ? renderLink() : renderButton();
};

export default Button;
