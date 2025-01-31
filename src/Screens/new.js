const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerLabel: () => null
      })}
      drawerContent={(props) =>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 0, flexGrow: 1, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
            {/* <MemberHeader {...props} /> */}
            <Image source={Images.logo} resizeMode="contain" style={{ width: '70%', height: '30%', marginTop: 20 }} />
            <DrawerItem {...props} />
            <ImageBackground source={Images.header} resizeMode="cover" style={{ width: '100%', paddingVertical: 15, height: height * .2, alignItems: 'center', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={styles.backView} onPress={() => Linking.openURL('https://exploremoredfw.com/pages/terms-and-conditions')}>
                <Text style={styles.termsText}>Terms of Service</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backView} onPress={() => Linking.openURL('https://exploremoredfw.com/pages/privacy-policy')}>
                <Text style={styles.termsText}>Privacy Policy</Text>
              </TouchableOpacity>
            </ImageBackground>
            {/* <Logout {...props} /> */}
          </ScrollView>
        </View>}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: () => null, headerShown: false }} />
      {/* <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notification" component={Notification} /> */}
    </Drawer.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontWeight: 700, fontSize: 15, },
        // tabBarIconStyle: { display: 'none' },
        tabBarStyle: { borderTopWidth: 0, backgroundColor: '#000000', borderTopColor: "#C4C4C4", height: 85, paddingTop: 0, alignItems: 'center', justifyContent: 'center' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          return focused ? (
            <View style={styles.labelFocusedContainer}>
              {/* <HomeSelectedIcon height={24} width={24} /> */}
              <Text style={styles.labelFocusedStyle}>{route.name}</Text>
            </View>
          ) : (
            <View style={styles.labelContainer}>
              {/* <HomeIcon height={24} width={24} /> */}
              <Text style={styles.labelStyle}>{route.name}</Text>
            </View>
          );

          // You can return any component that you like here!
          return <Image source={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="ACTIVE CARDS" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="COMPLETED" component={Completed} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='MyDrawer' screenOptions={{ headerShown: false, animation: 'none' }} >
      <Drawer.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} screenOptions={{ headerShown: false }} navigationOptions={{ headerLeft: false }} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} screenOptions={{ headerShown: false, headerLeft: null, }} navigationOptions={{ headerLeft: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
    </Stack.Navigator>
  )
};

export default function App() {
  let token = store.getState()
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='AuthLoading' screenOptions={{ animation: 'none' }} >
        <Stack.Screen name="AuthLoading" component={Entry} options={{ headerShown: false }} />
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: false, animation: 'none' }} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}
