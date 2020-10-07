import React from 'react';
import './Contact.css';

let name = 'Chad Soto';
let avatar = 'https://randomuser.me/api/portraits/men/18.jpg';
let online = true;

function Contact(){
    return(
        <div className='Contact'>
        <img className='avatar' src={avatar}/>
        <div>
            <div className='name'>{name}</div>
            <div className='status'>
                <div className='status-online'></div>
                <div className='status-text'>{online ? 'online' : 'offline'}</div>
            </div>
        </div>
        </div>
    )

    }

export default Contact;