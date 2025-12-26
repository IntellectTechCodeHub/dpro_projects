'use client';

import { useState } from 'react';
import { MdOutlineReviews } from "react-icons/md";
import ReviewForm from "./reviewForm.js";

export default function Review () {

    const [requests, setRequests] = useState([]);
    const [reviews, setReviews] = useState([
        { id: 0, request: { id: 0, contact: "test1@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true }, status: "reviewed", reviewedBy: "user_123456", reviewedDate: "10/12/2025", isApproved: true},
        { id: 1, request: { id: 0, contact: "test1@test.com", phone: "000-000-0000", availability: "10/11/2025", privacy: true }, status: "needs review", reviewedBy: "user_123456", reviewedDate: "", isApproved: false }
    ]);

    let user = null;
    let userName = "New User 1";
    let content;

    const startReview = (id) =>{
        alert('start review: ' + id );
    }   

    if(reviews){

        const reviewList = reviews.map(rev => <li key={ rev.id } className="tableListItem"> { rev.request.contact + ' | ' + rev.status + ' | ' + rev.reviewedBy + ' | ' + rev.reviewedDate + ' | ' + rev.isApproved } </li>);

        content = 
            <div className="tableDiv">
                <p className="tableName"> Existing Reviews </p>
                <ul className="tableList"> { reviewList} </ul>
            </div>;
    }

    return(
        <div className="subComponentDiv">
            <div className="pageTitleDiv">
                <MdOutlineReviews className="color-gray-400 c w-[20%] h-[20%]"/>
                <h1 className="pageTitle"> Business Analyst: { userName } </h1>
                { content }
            </div>
            <div className="subComponentDiv">
                <p className="pageTitle"> Review process for existing interviews. </p>
                <ReviewForm  />
            </div>
        </div>
    );
};