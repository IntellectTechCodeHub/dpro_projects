import React, { useState } from 'react';
import { IoMdBusiness, IoMdCloudCircle, IoMdAnalytics } from 'react-icons/io';
import { Tooltip, TooltipTrigger } from '../../../../../ui/tooltip/tooltip.tsx';

const Domain = () => {

    let [businessTitle, setBusinessTitle] = useState(" Your business title");
    let [businessDescription, setBusinessDescription] = useState("This business description is currently unavailable.");

  return (
    <div className='componentDiv flex-col'>
        <div className='flex items-center- justify-evenly'>
            <h2 className='pageTitle'>Domain</h2>
        </div>        
        <div className="flex items-center justify-evenly">
            <div className=''>
                <Tooltip 
                    title={ businessTitle }
                    description={ businessDescription }
                >
                    <TooltipTrigger>
                        <IoMdBusiness className='size-auto' />
                    </TooltipTrigger>
                </Tooltip>
            </div>
            <div className=''>
                <Tooltip 
                    title={ businessTitle }
                    description={ businessDescription }
                >
                    <TooltipTrigger>
                        <IoMdCloudCircle className='size-auto' />
                    </TooltipTrigger>
                </Tooltip>
            </div>
            <div>
                <Tooltip 
                    title={ businessTitle }
                    description={ businessDescription }
                >
                    <TooltipTrigger>
                        <IoMdAnalytics className='size-auto' />
                    </TooltipTrigger>
                </Tooltip>
            </div>
        </div>
    </div>    
  )
}

export default Domain;