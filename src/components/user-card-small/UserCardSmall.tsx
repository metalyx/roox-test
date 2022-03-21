import React from 'react';
import { dispatchUsers, UsersActionsTypes } from '../../redux/app-reducer/reducer';
import './UserCardSmall.scss';



interface iUserCardSmall {
  name: string;
  city: string;
  company: string;
  id: number;
  dispatch: dispatchUsers;
}

const UserCardSmall: React.FC<iUserCardSmall> = ({ id, name, city, company, dispatch }) => {
  return (
    <div className='user-card-small__wrapper'>
      <ul>
        <li>
          <span className='description'>ФИО:</span>
          <span className='value'>{name}</span>
        </li>
        <li>
          <span className='description'>город:</span>
          <span className='value'>{city}</span>
        </li>
        <li>
          <span className='description'>компания:</span>
          <span className='value'>{company}</span>
        </li>
        <li className='more' onClick={() => dispatch({ type: UsersActionsTypes.SET_USER_ID_MODAL, payload: id })}>
          Подробнее
        </li>
      </ul>
    </div>
  )
};

export default UserCardSmall;
