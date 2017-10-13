import React, { Component } from 'react';

//component
import SearchLG from '../search/search_component_lg';

export default function ActionContainer(props){
    return(
        <div className='container action_container_body'>
            <div className='action_container_container'>
                <div class="form-group search_container_lg hidden-sm-down">
                    <i 
                        className="material-icons header_search_icon"
                    >search</i>
                    <input type="text" 
                            className="form-control search_input_lg" 
                            placeholder="Event Name" 
                            aria-label="Username"
                            value={props.search.lgEventName} 
                            onChange={(e)=>props.search.setLGEventName(e.target.value)}
                            onKeyUp={(e)=>{if(e.keyCode ==13)evalEntry()}}
                    />
                    <button 
                        type="button" 
                        className="btn"
                        onClick={()=>evalEntry()}
                    >Search</button>
                    <div className='action_lg_filter_container'>
                        <i className="material-icons action_container_filter_icon">filter_list</i>
                        <span>Filter</span>
                        <SearchLG search={props.search}/>
                    </div>
                </div>
                <div className='button_box'>
                    <button type="button" className="btn">Host a Job Fair</button>
                    <button type="button" className="btn">Host a Event</button>
                </div>
            </div>
        </div>
    );
    function evalEntry(){
        
        props.search.triggerQuery();
        
    }
    
}



