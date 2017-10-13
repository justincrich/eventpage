import React, { Component } from 'react';
//components
import SearchElements from './elements/search_elements';

export default class SearchLG extends Component {
    constructor(props){
        super(props);
        this.setFields = this.setFields.bind(this);
        this.state={
            fields:{
                event_name:'',
                company:'',
                date:null,
                location:'',
                has_catering:null,
                student_group:'',
                event_type:'',
                source:'',
                account_manager:'',
                room:'',
                format:'',
                status:'',
                reception:null,
                job_position:'',
                notes:'',
                industry:'',
                posted_date:null,
                event_reception_location:'',
                setFields:this.setFields
            }
            // sections:{
            //     employer_name_visible:true,
            //     event_date_visible:true
            // }

        }
        this.reset = this.reset.bind(this);
        
    }
    setFields(field){
        this.setState({
            ...field
        })
    }

    reset(){
        this.setState({
            fields:{
                ...this.state.fields,
                event_name:'',
                company:'',
                date:new Date(),
                location:'',
                has_catering:null,
                student_group:'',
                event_type:'',
                source:'',
                account_manager:'',
                room:'',
                format:'',
                status:'',
                reception:null,
                job_position:'',
                notes:'',
                industry:'',
                posted_date:new Date(),
                event_reception_location:'',
            }
        })
    }
    render(){
        return(
            <div  className='searchlg_body'>
                <div className='outterarrow'></div>
                <div className='innerarrow'></div>
                <div  className='searchlg_body_filter_container'>
                    <SearchElements fields={this.state.fields}/>
                </div>
                <div className='button_box_dropdown'>
                    <div 
                            
                            className="searchlg_submit_btn"
                            onClick={()=>{
                                let params = this.state.fields;
                                delete params['setFields']
                                this.props.search.query(params);
                                this.props.search.toggleActionFilter();
                            }}
                    ><span>Go</span>
                    </div>
                </div>
            </div>
        );
    }
}