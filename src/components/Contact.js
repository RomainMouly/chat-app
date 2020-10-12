import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact({avatar, name, online}){
    return(
        <div className='Contact'>
        <img className='avatar' src={avatar} alt={name}/>
        <div>
            <div className='name'>{name}</div>
            <div className='status'>
                <div className={online?'status-online' : 'status-offline'}></div>
                <div className='status-text'>{online ? 'online' : 'offline'}</div>
            </div>
        </div>
        </div>
    )

    }

    Contact.propTypes = {

        name : PropTypes.string,
        avatar : PropTypes.string,
        online : PropTypes.bool,
        

    }

export default Contact;