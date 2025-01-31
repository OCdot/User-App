import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CommonTxtInput from '../../Resources/Components/CommonTxtInput';
import {useDispatch} from 'react-redux';
import {login} from '../../Resources/Redux/action';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (username && password) {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: username, password: password}),
      });
      if (response.status === 200) {
        // navigation.navigate('Home');
        console.log('Login Successful');
        dispatch(login({
          username: username,
          password: password,
        }))
      } else {
        Alert.alert('Error', 'Invalid Username or Password');
      }
    } else {
      Alert.alert('Error', 'Username or Password cannot be empty');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <CommonTxtInput
        placeholder={'Username/e-mail'}
        input={txt => setUsername(txt)}
        value={username}
      />
      <CommonTxtInput
        placeholder={'Password'}
        input={txt => setPassword(txt)}
        value={password}
        txtEntry={true}
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.txt} onPress={() => navigation.navigate('Signup')}>
        Create An Account
      </Text>
    </View>
  );
};

export default Login;
