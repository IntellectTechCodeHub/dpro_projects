import { FaTwitter, FaMedium, FaVimeo, FaGithub, FaDiscord } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
    return(
        <div className="footerDiv">
            <div className="footerLogoDiv">
                <Image src="/logo.png" alt="Logo image" className="logo"/>
            </div>
            <div className="footerLinksDiv">
                <div className='footerLinksSocialDiv'>
                    <FaTwitter className='footerSocialIcons' />
                    <FaMedium className='footerSocialIcons' />
                    <FaVimeo className='footerSocialIcons' />
                    <FaGithub className='footerSocialIcons' />
                    <FaDiscord className='footerSocialIcons' />
                </div>
                <div className='footerLinksTextDiv'>
                    <a href="#" className="footerLinkText"> Privacy </a>
                    <p className="footerDivider"> | </p>
                    <a href="#" className="footerLinkText"> Corporate </a>
                    <p className="footerDivider"> | </p>
                    <a href="#" className="footerLinkText" > Sponsors </a>
                </div>
            </div>
            <div className='footerDisclaimerDiv'>
                <p className="footerDisclaimerText"> 
                    Disclaimer: All app activity is subject to data logging. In compliance with CCPA and GDPR all data privacy, safety, and security regulations are followed 
                    in the appropriate use and storage of user activity. No user information is sold for proprietary purposes, the research information 
                    is used for reporting analytics and compliance reports with aggregate data.
                </p>
            </div>
        </div>
    );
}