import {Text, View} from 'react-native';
import styles from './styles';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const CustomDrawer = ({state, navigation}) => {
  // console.log(state.routes)
    const Filter = state.routes.filter(route => route.name !== 'FooterNav');
    // console.log("FILTER",Filter)


  return (
    <View style={styles.container}>
      {Filter
        .map((route, index) => {
          const isFocused = state.index === index;
          // const isFocused = state.routes[state.index].name === route.name;
          return (
            <Text
              key={route.key}
              onPress={() => {
                navigation.navigate('FooterNav',{screen: route.name});
                // navigation.navigate(route.name)
              }}
              style={[styles.txt, {color: isFocused ? 'green' : 'black'}]}>
              {route.name}
            </Text>
          );
        })}
    </View>
  );
};

export default CustomDrawer;
