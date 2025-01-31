import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import CommonTxtInput from '../../Resources/Components/CommonTxtInput';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const Email = useSelector(state => state.username);
  const [name, setName] = useState('Sample User');
  const [phone, setPhone] = useState('1234567890');
  const [email, setEmail] = useState(Email);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            style={styles.drawer}
            source={require('../../Resources/icons/drawer.png')}
          />
        </TouchableOpacity>

        <Text style={styles.txt}>Welcome....</Text>
        <TouchableOpacity style={styles.signoutBtn}>
          <Text style={[styles.btnTxt, {color: 'white'}]}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CommonTxtInput value={name} input={txt => setName(txt)} />
        <CommonTxtInput value={phone} input={txt => setPhone(txt)} />
        <CommonTxtInput value={email} input={txt => setEmail('txt')} />
      </View>
    </>
  );
};

export default Profile;
