import React, { Component } from 'react';

//components
import SearchElements from './elements/search_elements';

export default class SearchSM extends Component{
    constructor(props){
        super(props);
        this.state={
            employer_name:'',
            date:null,
            location:'',
            bodyClass:'search_body',
            has_catering:null,
            student_group:'',
            event_type:'',
            event_source:'',
            account_manager:'',
            event_room:'',
            event_format:'',
            event_status:'',
            event_has_reception:null,
            target_job_position:'',
            admin_notes:'',
            industry:'',
            posted_date:'',
            event_reception_location:'',

        }
        this.reset = this.reset.bind(this);
    }

    reset(){
        this.setState({
            ...this.state,
            employer_name:'',
            date:new Date(),
            location:'',
            has_catering:null,
            student_group:'',
            event_type:'',
            event_source:'',
            account_manager:'',
            event_room:'',
            event_format:'',
            event_status:'',
            event_has_reception:null,
            target_job_position:'',
            admin_notes:'',
            industry:'',
            posted_date:new Date(),
            event_reception_location:'',
        })
    }

    render(){
        
        return(
            <form id='search' className='search_body'>
            <div className='search_header'>
                <i  className="material-icons"
                    onClick={this.props.search.toggle}
                >close</i>
                <span className='clear_filters'
                      onClick={this.reset}  
                >clear</span>
            </div>
            <SearchElements/>
            <div className='search_action_container'>
                <button type="button" className="btn btn-primary">Search</button>
                <div 
                    className='search_action_container_filter'
                    onClick={()=>{
                        let bodyClass;
                        if(this.state.filtersViewable){

                            bodyClass='search_body';
                        }else{
                            bodyClass='search_filters_body';
                        }
                        let viewSize;
                        if(this.state.filtersViewable){
                            viewSize= 'auto';
                        }else{
                            viewSize= 'calc(100% - 140px)';
                        }
                        document.getElementById('search').style.height = viewSize;
                        this.setState({
                            filtersViewable:!this.state.filtersViewable,
                            bodyClass:bodyClass,
                            height:viewSize
                        })
                    }}
                >
                    {this.state.filtersViewable ?
                        <i className="material-icons searc_filter_icon">close</i>
                        :
                        <i className="material-icons searc_filter_icon">filter_list</i>
                    }
                    <span>Filters</span>
                </div>
            </div>
        </form>
        );
    }
}