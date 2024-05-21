import React from 'react';
import './headerOption.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../reducers/userSlice';

const HeaderOption = ({avatar, Icon, title, onClick,isAvatar}) => {
  const user = useSelector(selectUser)
  console.log("user", user)
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {isAvatar && (
            <Avatar src={avatar} className='headerOption__icon'>{user.email[0].toUpperCase()}</Avatar>
        )}
        <h3 className='headerOption__title'>{title}</h3>
        
        
    </div>
  )
}


export default HeaderOption;
