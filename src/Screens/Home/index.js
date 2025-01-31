import {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './style';
import ActionSheet from 'react-native-actions-sheet';
import {PermissionsAndroid, Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Resources/Redux/action';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const actionSheetRef = useRef(null);
  const mapRef = useRef(null);
  const [selectedUser, setSelectedUser] = useState(null);
  // const [option, setOption] = useState('');
  const username = useSelector(state => state.username);
  console.log('USERNAME', username);

  useEffect(() => {
    fetchUsers();
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);

        const allGranted =
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED;

        if (!allGranted) {
          Alert.alert(
            'Permissions Required',
            'Camera and Storage permissions are required to use this feature.',
          );
          return false;
        }
        return true;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // For iOS, permissions are granted by default
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to use this feature.',
        );
      }
    }
  };

  const editImg = async (itm, optns) => {
    // console.log(itm);

    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    if (optns === 'gallery') {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          //   console.log('User cancelled image picker');
        } else if (response.errorCode) {
          // console.log('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const newDp = response.assets[0].uri;

          setUsers(
            users.map(user =>
              user.id === itm.id
                ? {...user, avatar: newDp, location: itm.location}
                : user,
            ),
          );
          actionSheetRef.current.hide();
        }
      });
    } else if (optns === 'camera') {
      requestPermissions();
      launchCamera(options, response => {
        if (response.didCancel) {
          //   console.log('User cancelled image picker');
        } else if (response.errorCode) {
          // console.log('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const newDp = response.assets[0].uri;

          setUsers(
            users.map(user =>
              user.id === itm.id
                ? {...user, avatar: newDp, location: itm.location}
                : user,
            ),
          );
          actionSheetRef.current.hide();
        }
      });
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();

      // console.log("DATA.DATA", data.data)

      setUsers(
        data.data.map(user => ({
          ...user,
          location: {latitude: 9.931233, longitude: 76.267303},
        })),
      );
      // console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // console.log('Logout');
  };

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
        <TouchableOpacity onPress={handleLogout} style={styles.signoutBtn}>
          <Text style={[styles.btnTxt, {color: 'white'}]}>Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={
                  item.avatar
                    ? {uri: item.avatar}
                    : require('../../Resources/icons/profile.png')
                }
                style={styles.avatar}
              />
              <TouchableOpacity
                onPress={() => {
                  setSelectedUser(item);
                  actionSheetRef.current.show();
                }}>
                <Image
                  style={styles.editIcon}
                  source={require('../../Resources/icons/edit.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={styles.email}>{item.email}</Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedUser(item);
                  requestLocationPermission();
                  mapRef.current.show();
                }}
                style={styles.locationButton}>
                <Text style={styles.btnTxt}>Show Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheetContainer}>
          <TouchableOpacity
            onPress={() => {
              // setOption('camera');
              // console.log(option)
              editImg(selectedUser, 'camera');
            }}>
            <Image
              style={styles.icon}
              source={require('./../../Resources/icons/video.png')}
            />
            <Text style={styles.actionSheetTxt}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // setOption('gallery');
              // console.log(optn)
              editImg(selectedUser, 'gallery');
            }}>
            <Image
              style={styles.icon}
              source={require('./../../Resources/icons/folder.png')}
            />
            <Text style={styles.actionSheetTxt}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>

      <ActionSheet ref={mapRef}>
        <View style={styles.mapContainer}>
          <Text>Map</Text>
          {/* {console.log(selectedUser)} */}

          {selectedUser &&
            (console.log('Selected User Location:', selectedUser.location),
            (
              <MapView
                // provider="google"
                showsUserLocation={true}
                followsUserLocation={true}
                zoomControlEnabled={true}
                pitchEnabled={true}
                scrollEnabled={true}
                rotateEnabled={true}
                initialRegion={{
                  latitude: selectedUser.location.latitude,
                  longitude: selectedUser.location.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{flex: 1}}>
                <Marker
                  coordinate={{
                    latitude: selectedUser.location.latitude,
                    longitude: selectedUser.location.longitude,
                  }}
                  title="Testing"
                />
              </MapView>
            ))}
        </View>
      </ActionSheet>
    </>
  );
};

export default Home;
