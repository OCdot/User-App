import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const CustomFooter = ({state, navigation, descriptors}) => {
  const Filter = state.routes.filter(route => route.name != 'Screen1')
  //   console.log('PROSP', state);
  return (
    <View style={styles.footerContainer}>
      {Filter.map((route, index) => {
        const isFocused = state.index === index;
        const icon =
          route.name === 'Home'
            ? require('../../Resources/icons/home.png')
            : route.name === 'Profile'
            ? require('../../Resources/icons/user.png')
            : null;
            return(
                <TouchableOpacity style= {styles.btnContainer} onPress={()=>{navigation.navigate(route.name)}} key={route.key}>
                    <Image style={[styles.icon,{tintColor : isFocused?'#305cde' :'black'}]} source={icon}/>
                </TouchableOpacity>
            )
      })}
    </View>
  );
};

export default CustomFooter;
