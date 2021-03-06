import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Box, CircularProgress } from '@material-ui/core';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PostPage from './pages/PostPage';
import { RootState } from './store/reducers';
import {
  loadUser,
  getProfileData,
  getUsers,
  setNotifications,
  setFriends,
  setMessages,
} from './store/actions';
import { auth, db } from './firebase';

const App: React.FC = () => {
  const [checkAuth, setCheckAuth] = useState(true);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => {
        if (user && user.email) {
          const { email, uid, displayName } = user;
          const firstName = displayName!.slice(0, displayName!.indexOf(' '));
          const lastName = displayName!.slice(displayName!.indexOf(' ') + 1);
          dispatch(loadUser({ email, userId: uid, firstName, lastName }));
        }
        setCheckAuth(false);
      },
      (error) => console.log(error.message),
    );

    return () => {
      auth.onAuthStateChanged(
        () => {},
        () => {},
      );
    };
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(getProfileData(userId));
      dispatch(getUsers());

      db.collection('users')
        .doc(userId)
        .onSnapshot(
          (snapshot) => {
            dispatch(setNotifications(snapshot.data()!.notifications));
            dispatch(setFriends(snapshot.data()!.friends));
            dispatch(setMessages(snapshot.data()!.messages));
          },
          (error) => console.log(error.message),
        );

      return () => {
        db.collection('users')
          .doc(userId)
          .onSnapshot(
            () => {},
            () => {},
          );
      };
    }
  }, [userId]);

  const routes = userId ? (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/post/:id" component={PostPage} />
      <Redirect to="/home" />
    </Switch>
  ) : (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );

  return (
    <Box minHeight="100vh">
      {checkAuth ? (
        <Box
          display="flex"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress size={300} />
        </Box>
      ) : (
        routes
      )}
    </Box>
  );
};

export default App;
