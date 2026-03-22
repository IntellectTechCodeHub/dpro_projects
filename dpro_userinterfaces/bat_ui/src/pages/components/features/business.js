'use client';

import { useState } from 'react';
import { IoMdAnalytics, IoMdBulb, IoMdCloudOutline, IoMdGlobe, IoMdLaptop } from 'react-icons/io';
import { MdInfo, MdOutlineBusiness, MdOutlineBusinessCenter, MdOutlineLocationCity, MdOutlinePhone, MdPersonOutline } from "react-icons/md";
import SaveDataValues from '../data save/savedatavalues';

let serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL + "business";

const BusinessInfoForm = ({onComplete}) => {
    const [isSaveComplete, setIsSaveComplete] = useState(false);
    const [businessFormData, setBusinessFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);

    let saveTypes = ["Business"];

    let handleComplete = (e) => {
        e.preventDefault();
        alert('form complete');

        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);

        console.log(dataJson);

        let dataObject = {
            businessId: crypto.randomUUID(),
            businessDocumentId: '000-000-000',
            businessName: dataJson['Business Name'],
            businessDescription: dataJson['Business Description'],
            businessContact: dataJson['Business Contact'],
            businessPhone: dataJson['Business Phone'],
            businessCity: dataJson['City'],
            businessState: dataJson['State'],
            businessIndustries: dataJson['Industry'],
            businessInfoProtection: dataJson['Information Protection'] == 'on' ? true : false,
            businessCreatedDate: '2026-01-01',
            businessIsActive: true
        }

        setBusinessFormData(dataObject);
        console.log(dataObject);
        
        setIsFormComplete(true);
    }

    let pageContent = 
        <div className='w-[75%] h-auto m-[2.5%] bg-slate-500 rounded-lg shadow-green-900 shadow-lg '>
            <div className='componentDiv'>
                <p className='text-3xl text-center font-semibold font-mono text-green-900'> Business Information </p>
                <form className='formDiv' onSubmit={ handleComplete } >
                    <div className='checkboxDiv'>
                        <MdInfo className='textInputImage' />
                        <input name='Information Protection' type='checkbox' className='checkboxInput'/>
                        <p className='text-lg'>By checking this box you agree all information provided is valid and without error. The information gathered is subject to privacy and protection regulations as noted in the disclaimer at the bottom of the page. </p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='textInputDiv'>
                            <MdOutlineBusiness className='textInputImage' />
                            <input name='Business Name' type='text' className='textInput' placeholder='add business name' />
                        </div>
                        <div className='textInputDiv'>
                            <MdPersonOutline className='textInputImage' />
                            <input name='Business Description' type='text' className='textInput' placeholder='add business description' />
                        </div>
                        <div className='textInputDiv'>
                            <MdPersonOutline className='textInputImage' />
                            <input name='Business Contact' type='text' className='textInput' placeholder='add business contact' />
                        </div>
                        <div className='textInputDiv'>
                            <MdOutlinePhone className='textInputImage' />
                            <input name='Business Phone' type='text' className='textInput' placeholder='add business phone' />
                        </div>
                        <div className='textInputDiv'>
                            <MdOutlineLocationCity className='textInputImage' />
                            <input name='City' type='text' className='textInput' placeholder='city' />
                        </div>
                        <div className='textInputDiv'>
                            <MdOutlineLocationCity className='textInputImage' />
                            <input name='State' type='text' className='textInput' placeholder='state' />
                        </div>
                    </div>
                    <div className='selectInputDiv'>
                        <MdOutlineBusinessCenter className='textInputImage'/>
                        {/* <select name='Industry' className='selectInput' multiple> */}
                        <select name='Industry' className='selectInput'>
                            <option value='Healthcare'> healthcare </option>
                            <option value='Finance'> finance </option>
                            <option value='Biometrics'> biometrics </option>
                            <option value='Sustainable Energy'> sustainable energy </option>
                            <option value='Other'> other </option>
                        </select>
                    </div>
                    <div>
                        <button name='Complete Business' type='submit' className='button'>Complete: Next Page</button>
                    </div>
                </form>
            </div>
        </div>;

    let saveComplete = () => {
        console.log('save complete');
        saveCompleted = true;
        onComplete();
    }

    console.log('business info form');

    return(
        <div className="bg-slate-100 m-[2.5%] flex flex-col w-full h-auto items-center justify-evenly">
            { !isFormComplete ? pageContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ businessFormData } eventCallback={ onComplete } /> }
        </div>
    );
}

const BusinessInfo = ({ hasBusiness, onComplete}) => {
    console.log('hasBusiness: ' + hasBusiness);
    console.log(onComplete);
    return(
        <div className='flex w-full h-auto m-[2.5%] bg-slate-900 items-center justify-evenly'>
            <div className='flex flex-col w-full h-auto m-[2.5%] items-center'>
                <div className='w-[75%] h-auto m-[2.5%] bg-slate-500 items-center justify-evenly animate-bounce'>
                    <p className='text-3xl text-center text-black font-bold font-mono'>Begin the digital transformation with Anify</p>
                </div>
                <div className='flex flex-col w-full h-auto m-[2.5%] items-center justify-center bg-slate-500 shadow-green-900 shadow-lg rounded-sm'>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdBulb className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> diagram processes and actions </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdBulb className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> facilitate problem discovery and research analysis </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdLaptop className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> idenitfy digital solutions and define data use </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdLaptop className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> recieve approval for architecture reviews </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdAnalytics className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> data maturity assessments </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdAnalytics className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> data governance and compliance regulations </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <IoMdGlobe className='inputTextImage' />
                        <p className='text-xl text-center font-semibold text-black'> compliance reporting </p>
                    </div>
                </div>
                <div className='w-full flex flex-col bg-slate-500 shadow-green-900 shadow-lg rounded-sm'>
                    <div className='w-full h-auto m-[2.5%] items-center justify-evenly animation-pulse'>
                        <p className='text-2xl text-center text-black font-bold font-mono'>Industry Use Cases</p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>Healthcare HL7</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Interoperability
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>Healthcare HIPAA</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Information protection
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>General GDPR</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Data protection
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>General CCPA</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Consumer privacy
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>Finance SOC2</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Financial accounting
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>Finance Equity</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Transaction records
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <IoMdCloudOutline className='textInputImage' />
                        <p className='m-[2.5%] text-xl text-center text-black font-bold font-mono'>Healthcare Pharma</p>
                        <p className='text-5xl text-center text-green-900 text-shadow-black text-shadow-lg font-semibold font-mono'>
                            Production regulations
                        </p>
                    </div>
                </div>
            </div>
            { <BusinessInfoForm onComplete={onComplete} /> }
        </div>
    );
}
export default BusinessInfo;