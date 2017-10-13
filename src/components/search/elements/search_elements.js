import React, { Component } from 'react';

export default function SearchElements(props){
        return(
            <form className='search_elements_form'>
                    <div className='search_field_boxes search_event_name_container'>
                        <label for="event_name">Event Name</label>
                        <input 
                            id='event_name' 
                            className='form-control' 
                            value={props.fields.event_name}
                            onChange={(e)=>{
                                props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        event_name: e.target.value
                                    }
                                });
                            }}
                        />
                    </div>
                    <div className='search_field_boxes'>
                        <label for="company">Employer Name</label>
                        <input 
                            id='company' 
                            className='form-control' 
                            value={props.fields.company}
                            onChange={(e)=>{
                                props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        company: e.target.value
                                    }
                                });
                            }}
                        />
                    </div>
                    <div className='search_field_boxes'>
                        <label for="date">Event Date</label>
                        <input id='date' 
                                type='date' 
                                className='form-control' 
                                placeholder="Dates"
                                value={props.fields.date}
                                onChange={(e)=>{
                                    props.fields.setFields({
                                        
                                        fields:{
                                            ...props.fields,
                                            date: e.target.value
                                        }
                                        
                                    });
                                }}
                        />
                    </div>
                

                        <div className="container_status form_item">
                            <label for="status">Event Status</label>
                            <div className="status" id="status">
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="status_open" 
                                        id="status_open" 
                                        value="Registration Open"
                                        checked={props.fields.status==='Registration Open'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                status: e.target.value
                                            }
                                            })}}
                                    />
                                    <span>Registration Open</span>
                                </div>
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="status_closed" 
                                        id="status_closed" 
                                        value="Registration Closed"
                                        checked={props.fields.status==='Registration Closed'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                status: e.target.value
                                            }
                                        })}}
                                    />
                                    <span>Registration Closed</span>
                                </div>
                            </div>
                        </div>
                        <div className='container_student_group form_item'>
                            <label for="job_position">Target Job Position</label>
                            <select 
                                className="form-control job_position" 
                                id="job_position"
                                value={props.fields.job_position}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        job_position: e.target.value
                                    }
                                })}
                            >
                                <option value='Developer'>Developer</option>
                                <option value='Teacher'>Teacher</option>
                                <option value='Project Manager'>Project Manager</option>
                                <option value='Data Analyst'>Data Analyst</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_student_group form_item'>
                            <label for="student_group">Student Group</label>
                            <select 
                                className="form-control student_group" 
                                id="student_group"
                                value={props.fields.student_group}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        student_group: e.target.value
                                    }
                                    })}
                            >
                                <option value='Accounting Club'>Accounting Club</option>
                                <option value='IT Club'>IT Club</option>
                                <option value='Engineering Club'>Engineering Club</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_event_type form_item'>
                            <label for="event_type">Event Type</label>
                            <select 
                                className="form-control event_type" 
                                id="event_type" 
                                name='event_type'
                                value={props.fields.event_type}
                                onChange={(e)=>props.fields.setFields(
                                    {
                                        fields:{
                                            ...props.fields,
                                            event_type: e.target.value
                                        }
                                    }
                                    )}
                            >
                                <option value='Mock Interviews'>Mock Interviews</option>
                                <option value='Career Workshops'>Career Workshops</option>
                                <option value='Company Event'>Company Event</option>
                                <option value='Career Fair'>Career Fair</option>
                                <option value='Mock Interviews'>Mock Interviews</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_source form_item'>
                            <label for="source">Event Source</label>
                            <select 
                                className="form-control source" 
                                id="source" 
                                name='source'
                                value={props.fields.source}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        source: e.target.value
                                    }
                                    })}
                            >
                                <option value='Gale Petr'>Gale Petr</option>
                                <option value='North Lindmark'>North Lindmark</option>
                                <option value='Vallie Reicherz'>Vallie Reicherz</option>
                                <option value='Beitris Prinne'>Beitris Prinne</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className="container_has_catering form_item">
                            <label for="has_catering">Has Catering</label>
                            <div className="has_catering" id="has_catering">
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="has_catering_yes" 
                                        id="has_catering_yes" 
                                        value="Yes"
                                        checked={props.fields.has_catering==='Yes'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                has_catering: e.target.value
                                            }
                                            })}}
                                    />
                                    <span>Yes</span>
                                </div>
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="has_catering_no" 
                                        id="has_catering_no" 
                                        value="No"
                                        checked={props.fields.has_catering==='No'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                has_catering: e.target.value
                                            }
                                        })}}
                                    />
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                        <div className="container_event_reception form_item">
                            <label for="reception">Event Has Reception</label>
                            <div className="reception" id="reception">
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="reception_yes" 
                                        id="reception_yes" 
                                        value="Yes"
                                        checked={props.fields.reception==='Yes'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                reception: e.target.value
                                            }
                                        })}}
                                    />
                                    <span>Yes</span>
                                </div>
                                <div className='radio_container'>
                                    <input 
                                        type="radio" 
                                        name="reception_no" 
                                        id="reception_no" 
                                        value="No"
                                        checked={props.fields.reception==='No'}
                                        onChange={(e)=>{props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                reception: e.target.value
                                            }
                                            })}}
                                    />
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                        <div className='container_account_manager form_item'>
                            <label for="account_manager">Career Center Account Manager</label>
                            <select 
                                className="form-control account_manager" 
                                id="account_manager" 
                                name='account_manager'
                                value={props.fields.account_manager}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        account_manager: e.target.value
                                    }
                                })}
                            >
                                <option value='Perry Petr'>Perry Petr</option>
                                <option value='Durant Lindmark'>Durant Lindmark</option>
                                <option value='Weylin Reicherz'>Weylin Reicherz</option>
                                <option value='Adan Prinne'>Adan Prinne</option>
                                <option value='Rachele Caughey'>Rachele Caughey</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_room form_item'>
                            <label for="room">Event Room</label>
                            <select 
                                className="form-control room" 
                                id="room" 
                                name='room'
                                value={props.fields.room}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        room: e.target.value
                                    }
                                    })}
                            >
                                <option value='Ballroom 1'>Ballroom 1</option>
                                <option value='C138'>C138</option>
                                <option value='A104'>A104</option>
                                <option value='D211'>D211</option>
                                <option value='Ballroom2'>Ballroom2</option>
                                <option value='D316'>D316</option>
                                <option value='H104'>H104</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_format form_item'>
                            <label for="format">Event Format</label>
                            <select 
                                className="form-control format" 
                                id="format" 
                                name='format'
                                value={props.fields.format}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        format: e.target.value
                                    }
                                })}
                            >
                                <option value='On Site'>On Site</option>
                                <option value='Online'>Online</option>
                                <option value='In Person'>In Person</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_event_location form_item'>
                            <label for="event_location">Event Reception Location</label>
                            <select 
                                className="form-control event_location" 
                                id="event_location" 
                                name='event_location'
                                value={props.fields.event_location}
                                onChange={(e)=>props.fields.setFields({
                                    fields:{
                                        ...props.fields,
                                        event_location: e.target.value
                                    }
                                })}
                            >
                                <option value='Smith Hall'>Smith Hall</option>
                                <option value='David Hall'>David Hall</option>
                                <option value='Albert Hall'>Albert Hall</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='container_industry form_item'>
                            <label for="industry">Industry</label>
                            <select 
                                className="form-control industry" 
                                id="industry" 
                                name='industry'
                                value={props.fields.industry}
                                onChange={(e)=>props.fields.setFields({fields:{
                                        ...props.fields,
                                        industry: e.target.value
                                    }})}
                            >
                                <option value='Finance: Consumer Services'>Finance: Consumer Services</option>
                                <option value='Business Services'>Business Services</option>
                                <option value='Banks'>Banks</option>
                                <option value='' selected>All</option>
                            </select>
                        </div>
                        <div className='search_field_boxes notes form_item'>
                            <label for="notes">Admin Notes</label>
                            <input 
                                id='notes' 
                                className='form-control notes' 
                                value={props.fields.notes}
                                onChange={(e)=>{
                                    props.fields.setFields({
                                        fields:{
                                            ...props.fields,
                                            notes: e.target.value
                                        }
                                    });
                                }}
                            />
                        </div>
                        <div className='search_field_boxes posted_date form_item'>
                            <label for="posted_date">Posted Date</label>
                            <input id='posted_date' 
                                    type='date' 
                                    className='form-control posted_date'
                                    value={props.fields.posted_date}
                                    onChange={(e)=>{
                                        props.fields.setFields({
                                            fields:{
                                                ...props.fields,
                                                posted_date: e.target.value
                                            }
                                        });
                                    }}
                            />
                    </div>
                        
                
                
            </form>
        );
    
}