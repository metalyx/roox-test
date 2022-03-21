import { iUser } from "./types/user";

interface iInitialState {
  users: iUser[] | undefined;
  usersIsPending: boolean;
  usersIsError: boolean;
  currentUserIdModal: number | null;

  isSortedByCity: boolean;
  isSortedByCompanyName: boolean;
  isAbleToEdit: boolean;
}

export enum UsersActionsTypes {
  SET_USERS = 'SET_USERS',
  SET_USERS_PENDING = 'TOGGLE_USERS_PENDING',
  SET_USERS_ERROR = 'TOGGLE_USERS_ERROR',
  SET_USER_ID_MODAL = 'SET_USER_ID_MODAL',
  SET_IS_SORTED_BY_CITY = 'SET_IS_SORTED_BY_CITY',
  SET_IS_SORTED_BY_COMPANY_NAME = 'SET_IS_SORTED_BY_COMPANY_NAME',
  SET_IS_ABLE_TO_EDIT = 'SET_IS_ABLE_TO_EDIT',
}

type SetUserAction = {
  type: UsersActionsTypes.SET_USERS,
  payload: iUser[],
};

type BooleanAction = {
  type: 
    UsersActionsTypes.SET_USERS_PENDING |
    UsersActionsTypes.SET_USERS_ERROR |
    UsersActionsTypes.SET_IS_SORTED_BY_CITY |
    UsersActionsTypes.SET_IS_SORTED_BY_COMPANY_NAME |
    UsersActionsTypes.SET_IS_ABLE_TO_EDIT,
  payload: boolean,
};

type NumberOrNullAction = {
  type: UsersActionsTypes.SET_USER_ID_MODAL,
  payload: number | null,
}

export type UsersActions = SetUserAction | BooleanAction | NumberOrNullAction;

export type dispatchUsers = (value: UsersActions) => void;

export const initialState: iInitialState = {
  users: undefined,
  usersIsPending: false,
  usersIsError: false,
  currentUserIdModal: null,

  isSortedByCity: false,
  isSortedByCompanyName: false,
  isAbleToEdit: false,
}

export const UsersReducer = (state: iInitialState, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UsersActionsTypes.SET_USERS_PENDING:
      return {
        ...state,
        usersIsPending: action.payload,
      };
    case UsersActionsTypes.SET_USERS_ERROR:
      return {
        ...state,
        usersIsError: action.payload,
      };
    case UsersActionsTypes.SET_USER_ID_MODAL:
      return {
        ...state,
        currentUserIdModal: action.payload,
      }
    case UsersActionsTypes.SET_IS_SORTED_BY_CITY:
      return {
        ...state,
        isSortedByCity: action.payload,
      }
    case UsersActionsTypes.SET_IS_SORTED_BY_COMPANY_NAME:
      return {
        ...state,
        isSortedByCompanyName: action.payload,
      }
    case UsersActionsTypes.SET_IS_ABLE_TO_EDIT:
      return {
        ...state,
        isAbleToEdit: action.payload,
      }
    default:
      return state;
  }

}

