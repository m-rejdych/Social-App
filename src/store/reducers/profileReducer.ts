import { PROFILE } from '../constants';
import {
  ProfileState,
  ProfileIntro,
  ProfileActions,
  ProfileData,
  ProfileDetails,
  Friend,
  Messages,
} from '../types/profileTypes';
import Notification from '../../types/Notificaiton';

const initialState: ProfileState = {
  email: '',
  firstName: '',
  lastName: '',
  userId: '',
  location: '',
  country: '',
  education: '',
  hobbies: '',
  dateOfBirth: '',
  proffesion: '',
  relationship: '',
  phoneNumber: '',
  friends: [],
  notifications: [],
  messages: {},
  loading: true,
  error: null,
};

const profileReducer = (
  state = initialState,
  { type, payload }: ProfileActions,
): ProfileState => {
  switch (type) {
    case PROFILE.SET_PROFILE_INTRO:
      return { ...state, loading: true };
    case PROFILE.SET_PROFILE_INTRO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ...(payload as ProfileIntro),
      };
    case PROFILE.GET_PROFILE_DATA:
      return { ...state, loading: true };
    case PROFILE.GET_PROFILE_DATA_SUCCESS:
      return { ...state, loading: false, ...(payload as ProfileData) };
    case PROFILE.SET_FRIENDS:
      return { ...state, friends: payload as Friend[] };
    case PROFILE.UPDATE_PROFILE_FIELD:
      return { ...state, loading: true };
    case PROFILE.UPDATE_PROFILE_FIELD_SUCCESS:
      return {
        ...state,
        loading: false,
        ...(payload as Partial<ProfileDetails>),
      };
    case PROFILE.SET_NOTIFICATIONS:
      return { ...state, notifications: payload as Notification[] };
    case PROFILE.SET_MESSAGES:
      return { ...state, messages: payload as Messages };
    case PROFILE.PROFILE_FAIL:
      return { ...state, loading: false, error: payload as string };
    default:
      return state;
  }
};

export default profileReducer;
