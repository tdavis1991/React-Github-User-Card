import React from 'react';
import './App.css';

function UserCard(props) {
    return (
        <div className='users'>
            <img className='avatar' src={props.image} alt='avatar' />
            <h1>Name: {props.name}</h1>
            <h3>Github Handle: {props.username}</h3>
            <button className='btn' onClick={props.followers}>Followers</button>
        </div>
    )
}

export default UserCard;