import {Alert, Text, TouchableOpacity, View} from 'react-native';
import CommonTxtInput from '../../Resources/Components/CommonTxtInput';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Signup = () => {
  const navigation = useNavigation();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSignup = async () => {
    if (fname && lname && email && pwd) {
      try {
        const response = await fetch('https://reqres.in/api/users?page=1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: fname,
            last_name: lname,
            email: email,
            password: pwd,
          }),
        });

        const data = await response.json();
        console.log(data);
        console.log(response.ok);

        if (response.ok) {
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', `Failed to create account `);
        }
      } catch (error) {
        console.log('ERROR', error);
      }
    } else {
      Alert.alert('Error', 'Fill All Fields');
    }
  };

  return (
    <>
      <Text style={styles.heading}>Create Account</Text>
      <View style={styles.container}>
        <CommonTxtInput
          placeholder={'First Name'}
          input={txt => {
            setFname(txt);
          }}
          value={fname}
        />
        <CommonTxtInput
          placeholder={'Last Name'}
          input={txt => {
            setLname(txt);
          }}
          value={lname}
        />
        <CommonTxtInput
          placeholder={'e-mail'}
          input={txt => {
            setEmail(txt);
          }}
          value={email}
        />
        <CommonTxtInput
          placeholder={'Password'}
          txtEntry={true}
          input={txt => {
            setPwd(txt);
          }}
          value={pwd}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.create} onPress={handleSignup}>
            <Text style={styles.btnTxt}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Signup;
