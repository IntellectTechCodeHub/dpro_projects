import React, { useState } from 'react';
import { IoMdSync, IoIosCalendar } from 'react-icons/io';

const MeetingSelector = () => {

  const [meetings, setMeetings] = useState(
      [
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'form', 'meetingName': 'Analysis', 'meetingIsActive': true },
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Discovery', 'meetingIsActive': true },
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Review', 'meetingIsActive': true },
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'proposal', 'meetingName': 'Solutions', 'meetingIsActive': true },
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'document review', 'meetingName': 'Requirements', 'meetingIsActive': true },
          { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Retrospective', 'meetingIsActive': true }
      ]
  );
  const [hasMeetings, setHasMeetings] = useState(true);
  
  let meeting = 
      <div className='bg-slate-500 w-full h-[50] items-center justify-evenly rounded-lg' >
          <p className='font-mono text-auto font-bold' > Discovery </p>
      </div>;
      
  function meetingElement(meetingName) {
      return(
          <div className='bg-slate-500 flex w-[auto] m-[2.5%] h-[auto] items-center justify-evenly rounded-lg' >
              <p className='font-mono text-auto font-bold m-[2.5%]' > { meetingName } </p>
              <div className="dateInputDiv">
                  <IoIosCalendar className="textInputImage" />
                  <label for={ meetingName + " Interview Availability" } className="m-[2.5] text-sm font-bold"> { meetingName + " Availability" } </label>
                  <input name={ meetingName + " Interview Availability" } type="datetime-local" placeholder="Availability" className="dateInput" />
              </div>
          </div>
      );
  }

  let meetingsList;

  if(meetings){
      console.log(meetings);
      const meetingsElements = meetings.map(meeting => meetingElement(meeting.meetingName));
      meetingsList = 
          <div className="w-full">
              { meetingsElements }
          </div>;
  }

  return (
    <div className='componentDiv'>
        <div className='pageTitleDiv'>
            <IoMdSync className="textInputImage" />
            <div className='pageTitle' > Meeting Selector </div>
        </div>
        <div className='w-full h-auto flex items-center justify-evenly'>
            { meetingsList }
        </div>
    </div>
  )
}

export default MeetingSelector;