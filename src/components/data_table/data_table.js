import React, { Component } from 'react';
import moment from 'moment';

export default function DataTable(props){
    let statusSmall = 'Registration Open';
    console.log(props)
    return(
        <div className='container table_body'>
            <div className='table_labels'>
                <h5 className='table_title'>Events</h5>
                <span className='event_count'>Events Found: {props.data.length}</span>
            </div>
                <table className="table table-bordered">
                    <thead className='table_header'>
                        <tr >
                        <th id='A' className='header'>Event Name</th>
                        <th id='B' className='header'>Date/Time</th>
                        <th id='C'className='header hidden-sm-down'>Status</th>
                        <th id='D' className='header hidden-sm-down'>Registrants (Waitlist)</th>
                        </tr>
                    </thead>
                        {formatData(props.data)}
                </table>
        </div>

    );
}

function formatData(data){
    return data.map(element=>{
        return(
            <tbody id={element.id}>
                    <td className='table_column_1_event_name'>
                        <div className='table_event_name_status_container'>
                            <div className="table_event_name_text">{element.event_name}</div>
                            <div className='hidden-md-up status_small'>{
                                element.status === 'Registration Open' ?
                                <div className='status_small_token open'><span>O</span></div>
                                :
                                <div className='status_small_token closed'><span>C</span></div>
                            }</div>
                            <div className="hidden-md-up registrants_sm">
                                {element.registrants}
                            </div>
                        </div>
                        <div className="table_company_name_text">{element.company}</div>
                        <div className="table_details_container">
                            <div className="table_event_type_text">{element.event_type}</div> <span>|</span>
                            <div className='table_location_text'>
                                <div className="table_room_text">{element.room}</div>
                                <div className="table_event_reception_location_text">{element.event_reception_location}</div>
                            </div>
                        </div>
                    </td>

                    <td className='table_column_2_event_date'>
                        <div className='date_container'>
                            <div className='date_text'>
                            {getDate(element.date)}
                            </div>
                        </div>
                    </td>

                    <td className='table_column_3_status hidden-sm-down status_large'>
                        {
                            element.status === 'Registration Open' ?
                                <div className='status_large_token open'><span className='status_large_text'>
                                    Registration Open
                                </span></div>
                            :
                                <div className='status_large_token closed'><span className='status_large_text'>
                                    Registration Closed
                                </span></div>
                        }
                    </td>
                    <td className='table_column_4_registrants hidden-sm-down'>
                        <div className='registrants_txt_container'>
                            <div className='registrants'>{element.registrants}</div>
                            <div className=''>{`(${element.waitlist})`}</div>
                        </div>
                    </td>
            </tbody>
        );
    })
}

function getDate(startDate,endDate=startDate){
    let start = moment(startDate);
    let end;
    if(startDate == endDate){
        end = moment(startDate).add(1,'hours');
    }else{
        end = moment(endDate);
    }

    return `${start.format('M/D/YYYY, h:mm A')} - ${end.format('h:mm A')}`;
    
}