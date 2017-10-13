import React, { Component } from 'react';

export default function Menu(props){
    return(
        <div className="menu_body">
            <ul>
                <div className='menu_section'>
                    <li>
                        <i className="material-icons">account_circle</i> Profile
                    </li>
                    <li>
                        <i className="material-icons"
                        >notifications</i> Notifications
                    </li>
                    <li>
                        <i className="material-icons"
                            >home</i> Home
                    </li>
                </div>
                <div className='menu_divider'></div>
                <div className='menu_section'>
                    <li>
                        <i className="material-icons"
                            >school</i> Students
                    </li>
                    <li>
                        <i className="material-icons"
                            >work</i> Employers
                    </li>
                    <li>
                        <i className="material-icons"
                            >contacts</i> Contacts
                    </li>
                </div>
                <div className='menu_divider'></div>
                <div className='menu_section'>
                    <li>
                        <i className="material-icons"
                            >assessment</i> Reporting Dashboards
                    </li>
                    <li>
                        <i className="material-icons"
                            >assessment</i> Custom Reports
                    </li>
                    <li>
                        <i className="material-icons"
                            >assessment</i> 12Twenty Reports
                    </li>
                    <li>
                        <i className="material-icons"
                            >assessment</i> Standard Reports
                    </li>
                </div>
                <div className='menu_divider'></div>
                <div className='menu_section'>
                    <li>
                        <i className="material-icons"
                            >build</i> Research Tools
                    </li>
                </div>
                <div className='menu_divider'></div>
                <div className='menu_section'>
                    <li>
                        <i className="material-icons"
                            >list</i> OCI and Job Listing
                    </li>
                    <li>
                        <i className="material-icons"
                            >event</i> Appointments
                    </li>
                    <li>
                        <i className="material-icons"
                            >event_seat</i> Events
                    </li>
                    <li>
                        <i className="material-icons"
                            >account_circle</i> Candidate Search
                    </li>
                    <li>
                        <i className="material-icons"
                            >book</i> Resume Books
                    </li>
                </div>
            </ul>
        </div>
    )
}