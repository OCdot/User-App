import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Signup from './src/Screens/Signup';
import {store} from './src/Resources/Redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './src/Screens/Profile';
import CustomFooter from './src/Resources/CustomFooter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/Resources/CustomDrawer';
import Screen1 from './src/Screens/Screen1';

const Stack = createStackNavigator();
const Footer = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const AppNavigation = () => {
//   const isLoggedIn = useSelector(state => state.isLoggedIn);
//   console.log('isLoggedIn', isLoggedIn);

//   return (
//     <NavigationContainer>
//       {/* {console.log(isLoggedIn.isLoggedIn)} */}
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         {isLoggedIn ? (
//           <Stack.Screen name="DrawerNav" component={DrawerNav} />
//         ) : (
//           // <Stack.Screen component={FooterNavigation} name='FooterNavigation'/>
//           <>
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Signup" component={Signup} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const FooterNavigation = () => {
//   return (
//     <Footer.Navigator
//       tabBar={props => <CustomFooter {...props} />}
//       screenOptions={{headerShown: false}}>
//       <Footer.Screen component={Home} name="Home" />
//       <Footer.Screen component={Profile} name="Profile" />
//     </Footer.Navigator>
//   );
// };

// const DrawerNav = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{headerShown: false}}>
//       <Drawer.Screen component={FooterNavigation} name="FooterNavigation" />
//       <Drawer.Screen component={Profile} name="Profile" />
//     </Drawer.Navigator>
//   );
// };

const AppNavigation = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{headerShown: false,}}>
          <Stack.Screen component={FooterNav} name="FooterNav" />
          <Drawer.Screen component={Profile} name="Profile" />
          <Drawer.Screen component={Screen1} name='Screen1'/>
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Signup} name="Signup" />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

// const FooterDrawer = ()=>{
//   return(
//     <Stack.Navigator>
//       <Footer.Screen component={Profile} name='Profile'/>
//       <Stack.Screen component={FooterNav} name='FooterNav'/>
//     </Stack.Navigator>
//   )
// }


const FooterNav = () => {
  return (
    <Footer.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomFooter {...props} />}>
      <Footer.Screen component={Home} name="Home" />
      <Footer.Screen component={Profile} name="Profile" />
      <Footer.Screen name="Screen1" component={Screen1} />
    </Footer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
