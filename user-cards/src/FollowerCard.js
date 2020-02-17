import React from 'react';
import './App.css';

function FollowerCard(props) {
    return (
        <div className={`users${props.display ? ' remove' : ''}`}>
            <img className='avatar' src={props.image} alt='avatar' />
            <h3>Github Handle: {props.username}</h3>
        </div>
    )
}

export default FollowerCard;