import React, { Component } from 'react';

//Components
import Menu from '../menu/menu_component';
import Search from '../search/search_component';

export default function Header(props){

    return(
        <nav className='header_body'>
            
            <div className='header_img_container'>
                <img src='https://www.anderson.ucla.edu/assets/images/2017/global/logos/ucla-anderson-logo-blue-357w98h-2x.png'/>
                {props.menu.open ?
                    <i className="material-icons"
                    onClick={props.menu.toggle}
                    >expand_less</i>
                    :
                    <i className="material-icons"
                    onClick={props.menu.toggle}
                     >expand_more</i>
                }
            </div>
            <h5 className='header_title'>myCareer</h5>
            <div className='header_action_bar'>
                    <i className="material-icons hidden-sm-down"
                    >notifications</i>
                    <i className="material-icons hidden-sm-down"
                    >assessment</i>
                    <i 
                        className="material-icons header_search_icon hidden-md-up"
                        onClick={props.search.toggle}
                    >search</i>
                    <i className="material-icons hidden-sm-down">account_circle</i>
            </div>
            {props.menu.open &&
                <Menu/>
            }
        </nav>
    );
}
