import React from 'react';
import {ActivityIndicator, Button, TextInput, View} from 'react-native';
import useLoginController from '../../viewController/useLoginController';

import {styles} from './styles';

export const SignInScreen = () => {
  const {loading, signIn, credentials, setCredentials} = useLoginController();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={credentials.email}
        onChangeText={text => setCredentials({...credentials, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={credentials.password}
        onChangeText={text => setCredentials({...credentials, password: text})}
      />
      <Button onPress={signIn} title="Sign In" />
    </View>
  );
};
