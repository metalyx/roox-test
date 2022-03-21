import React, { useEffect, useReducer } from 'react';
import { UsersReducer, initialState, UsersActionsTypes } from './redux/app-reducer/reducer';
import axios from 'axios';
import { GET_USERS } from './utils/endpoints';
import List from './containers/users/list/List';
import Sorting from './containers/users/sorting/Sorting';
import UserCardLarge from './containers/users/user-card-large/UserCardLarge';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  useEffect(() => {
    if (state.users === undefined) {
      dispatch({ type: UsersActionsTypes.SET_USERS_PENDING, payload: true });

      // Задержка в 400 мс, чтобы было видно лоудер
      setTimeout(() => {
        axios.get(GET_USERS)
        .then(res => dispatch({ type: UsersActionsTypes.SET_USERS, payload: res.data }))
        .then(res => {
          dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_COMPANY_NAME, payload: false });
          dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_CITY, payload: false });
        })
        .then(res => dispatch({ type: UsersActionsTypes.SET_USERS_PENDING, payload: false }))
        .catch(err => dispatch({ type: UsersActionsTypes.SET_USERS_ERROR, payload: true }));
      }, 400);
      
      
    }
  }, [state.users]);

  return (
    <div className='app__wrapper'>
      <Sorting
        users={state.users}
        dispatch={dispatch}
        isSortedByCity={state.isSortedByCity}
        isSortedByCompanyName={state.isSortedByCompanyName}
      />
      {state.currentUserIdModal === null && (
        <List
          users={state.users}
          pending={state.usersIsPending}
          error={state.usersIsError}
          dispatch={dispatch}
        />
      )}
      {state.currentUserIdModal !== null && (
        <UserCardLarge
          user={state.users?.filter(user => user.id === state.currentUserIdModal)[0]}
          dispatch={dispatch}
          isAbleToEdit={state.isAbleToEdit}
        />
      )}

    </div>
  );
}

export default App;
