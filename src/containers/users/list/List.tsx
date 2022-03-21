import React from 'react';
import Loader from '../../../components/loader/Loader';
import UserCardSmall from '../../../components/user-card-small/UserCardSmall';
import { dispatchUsers } from '../../../redux/app-reducer/reducer';
import { iUser } from '../../../redux/app-reducer/types/user';
import './List.scss';

interface iList {
  users: iUser[] | undefined;
  pending: boolean;
  error: boolean;
  dispatch: dispatchUsers;
}

const List: React.FC<iList> = ({ users, pending, error, dispatch }) => {

  return (
    <div className='list__wrapper'>
      <h1>Список пользователей</h1>
      <div className='list__cards-wrapper'>
        {error && (
          <span>Проверьте подключение к интернету или повторите попытку позднее.</span> 
        )}

        {pending && (
          <Loader />
        )}

        {users && users.length === 0 && (
          <span>Пользователей не найдено</span> 
        )}

        {users && users.length > 0 && (
          users.map(user => (
            <React.Fragment key={user.id}>
              <UserCardSmall
                name={user.name}
                company={user.company.name}
                city={user.address.city}
                dispatch={dispatch}
                id={user.id}
              />
            </React.Fragment>
          )
        ))}

      </div>
    </div>
  )
};

export default List;
