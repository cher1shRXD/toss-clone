import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../Stacks/Detail";
import Setting from "../Screens/Setting";
import Account from "../Stacks/Account";
import MyStock from "../Stacks/MyStock";
import ModalIndex from "../Modal/Main";
import Login from "../Modal/Login";
import Signup from "../Modal/Signup";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={ModalIndex}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="홈">
      <HomeStack.Group>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MyStock"
          component={MyStock}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
      <HomeStack.Group 
        screenOptions={{ 
          presentation: "modal",
          gestureEnabled: false,    
          headerShown: false,      
          cardStyle: { flex: 1 },
        }}
      >
        <HomeStack.Screen
          name="AuthModal"
          component={AuthStackScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabScreen;
