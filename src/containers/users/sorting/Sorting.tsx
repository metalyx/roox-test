import React from 'react';
import ButtonPrimary from '../../../components/buttons/button-primary/ButtonPrimary';
import { dispatchUsers, UsersActionsTypes } from '../../../redux/app-reducer/reducer';
import { iUser } from '../../../redux/app-reducer/types/user';
import './Sorting.scss';

interface iSorting {
  users: iUser[] | undefined;
  dispatch: dispatchUsers;
  isSortedByCity: boolean;
  isSortedByCompanyName: boolean;
}

type SortType = 'city' | 'company';

interface iSortingProps {
  users: iUser[] | undefined;
  type: SortType;
  isSorted: boolean;
  dispatch: dispatchUsers;
}

const sortByAlphabet = (props: iSortingProps) => {
  const { users, type, isSorted, dispatch } = props;
  if (users === undefined || isSorted) {
    return;
  } else if (type === 'city') {
    const sortedUsers = users.sort((a, b) => {
      if (a.address.city > b.address.city) {
        return 1;
      }
      if (a.address.city < b.address.city) {
        return -1;
      }
      return 0;
    });
    dispatch({ type: UsersActionsTypes.SET_USERS, payload: sortedUsers });
    dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_COMPANY_NAME, payload: false });
    dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_CITY, payload: true });
  } else if (type === 'company') {
    const sortedUsers = users.sort((a, b) => {
      if (a.company.name > b.company.name) {
        return 1;
      }
      if (a.company.name < b.company.name) {
        return -1;
      }
      return 0;
    });
    dispatch({ type: UsersActionsTypes.SET_USERS, payload: sortedUsers });
    dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_COMPANY_NAME, payload: true });
    dispatch({ type: UsersActionsTypes.SET_IS_SORTED_BY_CITY, payload: false });
  } else {
    throw new Error ('Unexpected type of sorting, check out Sorting.tsx line 9')
  }
}

const Sorting: React.FC<iSorting> = ({ users, dispatch, isSortedByCity, isSortedByCompanyName }) => {
  return (
    <aside className='sorting-wrapper'>
      <div>Сортировка</div>
      <ButtonPrimary
        title='по городу'
        onClick={() => sortByAlphabet({ users, dispatch, type: 'city', isSorted: isSortedByCity })}
      />
      <ButtonPrimary
        title='по компании'
        onClick={() => sortByAlphabet({ users, dispatch, type: 'company', isSorted: isSortedByCompanyName })}
      />
    </aside>
  )
};

export default Sorting;
