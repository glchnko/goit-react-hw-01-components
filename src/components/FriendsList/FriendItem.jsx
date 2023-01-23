import PropTypes from "prop-types";
import React, { Fragment } from 'react';
import s from "./friendItem.module.css"



const FriendItem = ({avatar, name, isOnline}) => {
    const activeClass = isOnline ? s.online : s.offline;
    return (
        <Fragment>
            <span className={[s.status, activeClass].join(' ')}>{isOnline}</span>
             <li className={s.item}>
            <span className={s.status}>{isOnline}</span>
            <img 
            className={s.avatar} 
            src={avatar} 
            alt="User avatar" 
            width="48" />
            <p className={s.name}>{name}</p>
            </li>
        </Fragment>
       
    )
}

export default FriendItem;

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}