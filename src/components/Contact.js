import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';




class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={online : props.online}
    }


    Status =() => {
        const newStatus = !this.state.online;
        this.setState({ online : newStatus });
    }

    render(){

        const{avatar}=this.props;
        const{name}=this.props;
        const{online}=this.state;

    
        return(

            <div className='Contact'>
            <img className='avatar' src={avatar} alt={name}/>
            <div>
                <div className='name'>{name}</div>
                <div className='status'>
                    <div className={online?'status-online' : 'status-offline'} onClick={()=>this.Status()}></div>
                    <div className='status-text' onClick={()=>this.Status()}>{online ? 'online' : 'offline'}</div>
                </div>
            </div>
            </div>

        )
    }
}



    Contact.propTypes = {

        name : PropTypes.string,
        avatar : PropTypes.string,
        online : PropTypes.bool,
        
        

    }

export default Contact;