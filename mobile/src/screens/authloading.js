import React from 'react';
import * as SecureStore from 'expo-secure-store';
import Loading from '../components/Loading';
import { useEffect } from 'react';

const AuthLoading = props => {
  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync('token');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    checkLoginState();
  });

  return <Loading />;
};
export default AuthLoading;
