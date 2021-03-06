const AUTH = {
  SIGN_UP: 'AUTH_SIGN_UP',
  SIGN_IN: 'AUTH_SIGN_IN',
  SIGN_UP_SUCCESS: 'AUTH_SIGN_UP_SUCCESS',
  SIGN_IN_SUCCESS: 'AUTH_SIGN_IN_SUCCESS',
  LOAD_USER: 'AUTH_LOAD_USER',
  FAIL: 'AUTH_FAIL',
  RESET_ERROR: 'AUTH_RESET_ERROR',
};

const PROFILE = {
  SET_PROFILE_INTRO: 'PROFILE_SET_PROFILE_INTRO',
  SET_PROFILE_INTRO_SUCCESS: 'PROFILE_SET_PROFILE_INTRO_SUCCESS',
  GET_PROFILE_DATA: 'PROFILE_GET_PROFILE_DATA',
  GET_PROFILE_DATA_SUCCESS: 'PROFILE_GET_PROFILE_DATA_SUCCESS',
  UPDATE_PROFILE_FIELD: 'PROFILE_UPDATE_PROFILE_FIELD',
  UPDATE_PROFILE_FIELD_SUCCESS: 'PROFILE_UPDATE_PROFILE_FIELD_SUCCESS',
  ADD_FRIEND: 'PROFILE_ADD_FRIEND',
  ADD_FRIEND_SUCCESS: 'PROFILE_ADD_FRIEND_SUCCESS',
  SET_FRIENDS: 'PROFILE_SET_FRIENDS',
  SET_FRIENDS_SUCCESS: 'PROFILE_SET_FRIENDS_SUCCESS',
  DELETE_FRIEND: 'PROFILE_DELETE_FRIEND',
  DELETE_FRIEND_SUCCESS: 'PROFILE_DELETE_FRIEND_SUCCESS',
  SET_NOTIFICATIONS: 'PROFILE_SET_NOTIFICATIONS',
  SET_MESSAGES: 'PROFILE_SET_MESSAGES',
  PROFILE_FAIL: 'PROFILE_FAIL',
};

const VISITED_PROFILE = {
  GET_VISITED_PROFILE_DATA: 'VISITED_PROFILE_GET_VISITED_PROFILE_DATA',
  GET_VISITED_PROFILE_DATA_SUCCESS:
    'VISITED_PROFILE_GET_VISITED_PROFILE_DATA_SUCCESS',
  DELETE_VISITED_FRIEND: 'VISITED_PROFILE_DELETE_VISITED_FRIEND',
  DELETE_VISITED_FRIEND_SUCCESS:
    'VISITED_PROFILE_DELETE_VISITED_FRIEND_SUCCESS',
  VISITED_PROFILE_FAIL: 'VISITED_PROFILE_FAIL',
};

const POSTS = {
  SEND_POST: 'POSTS_SEND_POST',
  SEND_POST_SUCCESS: 'POSTS_SEND_POST_SUCCESS',
  DELETE_POST: 'POSTS_DELETE_POST',
  DELETE_POST_SUCCESS: 'POSTS_DELETE_POST_SUCCESS',
  GET_POSTS: 'POSTS_GET_POSTS',
  GET_POSTS_SUCCESS: 'POSTS_GET_POSTS_SUCCESS',
  GET_POST: 'POSTS_GET_POST',
  GET_POST_SUCCESS: 'POSTS_GET_POST_SUCCESS',
  LIKE_POST: 'POSTS_LIKE_POST',
  LIKE_POST_SUCCESS: 'POSTS_LIKE_POST_SUCCESS',
  DISLIKE_POST: 'POSTS_DISLIKE_POST',
  DISLIKE_POST_SUCCESS: 'POSTS_DISLIKE_POST_SUCCESS',
  COMMENT: 'POSTS_COMMENT',
  COMMENT_SUCCESS: 'POSTS_COMMENT_SUCCESS',
  DELETE_COMMENT: 'POSTS_DEELTE_COMMENT',
  DELETE_COMMENT_SUCCESS: 'POSTS_DELETE_COMMENT_SUCCESS',
  LIKE_COMMENT: 'POSTS_LIKE_COMMENT',
  LIKE_COMMENT_SUCCESS: 'POSTS_LIKE_COMMENT_SUCCESS',
  DISLIKE_COMMENT: 'POSTS_DISLIKE_COMMENT',
  DISLIKE_COMMENT_SUCCESS: 'POSTS_DISLIKE_COMMENT_SUCCESS',
  POSTS_FAIL: 'POSTS_FAIL',
};

const USERS = {
  GET_USERS: 'USERS_GET_USERS',
  GET_USERS_SUCCESS: 'USERS_GET_USERS_SUCCESS',
  USERS_FAIL: 'USERS_FAIL',
};

const CHAT = {
  SET_OPEN: 'CHAT_SET_OPEN',
  SET_TARGET: 'CHAT_SET_TARGET',
};

export { AUTH, PROFILE, POSTS, USERS, VISITED_PROFILE, CHAT };
