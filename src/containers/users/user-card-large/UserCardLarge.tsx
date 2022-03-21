import React from 'react';
import ButtonPrimary from '../../../components/buttons/button-primary/ButtonPrimary';
import UserCardLargeForm from '../../../components/forms/user-card-large-form/UserCardLargeForm';
import { dispatchUsers, UsersActionsTypes } from '../../../redux/app-reducer/reducer';
import { iUser } from '../../../redux/app-reducer/types/user';
import './UserCardLarge.scss';

interface iUserCardLarge {
  user?: iUser;
  dispatch: dispatchUsers;
  isAbleToEdit: boolean;
}

const UserCardLarge: React.FC<iUserCardLarge> = ({ user, dispatch, isAbleToEdit }) => {
  return (
    <div className='user-card-large__wrapper'>
      <div className='user-card-large__head'>
        <h1>Профиль пользователя</h1>
        <ButtonPrimary
          title='Редактировать'
          onClick={() => dispatch({
            type: UsersActionsTypes.SET_IS_ABLE_TO_EDIT, payload: !isAbleToEdit
          })}
        />
      </div>
      {user && (
        <UserCardLargeForm user={user} dispatch={dispatch} isAbleToEdit={isAbleToEdit} />
      )}

    </div>
  )
};

export default UserCardLarge;
