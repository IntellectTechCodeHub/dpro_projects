'use client';

import { useState } from "react";
import IntakeForm from "./intakeform.js";
import { MdTipsAndUpdates } from "react-icons/md";

export default function Intake( id, existingRequests) {

    const [hasRequests, setHasRequests] = useState(false);
    const [requests, setRequests] = useState([
        { id: 0, contact: "test1@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true },
        { id: 1, contact: "test2@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true },
        { id: 2, contact: "test3@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true },
        { id: 3, contact: "test4@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true },
        { id: 4, contact: "test5@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true },
        { id: 5, contact: "test6@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true }
    ]);
    const [pageContent, setPageContent] = useState(<div></div>);
    let content;

    // if (id != null) { user = id }
    if (requests) {
        const reqList = requests.map(req => <li key={ req.id } className="tableListItem"> { req.contact + ' | ' + req.phone + ' | ' + req.availability + ' | ' + req.privacy } </li>)

        content = 
            <div className="tableDiv">
                <p className="tableName"> Existing Requests </p>
                <ul className="tableList"> { reqList } </ul>
            </div>;
    }

    const newRequest = () => {
        alert('new request');
        setPageContent( <IntakeForm /> );
    }

    return(
        <div className="componentDiv">
            <div className="pageTitleDiv">
                <MdTipsAndUpdates className="color-gray-400 c w-[20%] h-[20%]"/>
                <h1 className="pageTitle"> Welcome to Business Analyst Tool. </h1>
                { content }
            </div>
            <div className="buttonDiv">
                <p className="my-4 text-xl"> Intake process begins with a new request. </p>
                <button className="addButton" onClick={ newRequest }> 
                    <span className="m-[2.5%]"> 
                        + 
                    </span> 
                    Create new request 
                </button>
                { pageContent }
            </div>
        </div>
    ); 
}