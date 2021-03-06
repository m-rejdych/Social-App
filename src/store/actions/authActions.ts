import { AUTH } from '../constants';
import { AuthActions, UserData, Auth, Error } from '../types/authTypes';

const signUp = (userData: UserData): AuthActions => ({
  type: AUTH.SIGN_UP,
  payload: userData,
});

const signUpSuccess = (userData: Auth): AuthActions => ({
  type: AUTH.SIGN_UP_SUCCESS,
  payload: userData,
});

const signIn = (userData: UserData): AuthActions => ({
  type: AUTH.SIGN_IN,
  payload: userData,
});

const signInSuccess = (userData: Auth): AuthActions => ({
  type: AUTH.SIGN_IN_SUCCESS,
  payload: userData,
});

const loadUser = (userData: Auth): AuthActions => ({
  type: AUTH.LOAD_USER,
  payload: userData,
});

const setAuthError = (error: Error): AuthActions => ({
  type: AUTH.FAIL,
  payload: error,
});

const resetError = (): AuthActions => ({
  type: AUTH.RESET_ERROR,
  payload: null,
});

export {
  signUp,
  signIn,
  signInSuccess,
  signUpSuccess,
  loadUser,
  setAuthError,
  resetError,
};
