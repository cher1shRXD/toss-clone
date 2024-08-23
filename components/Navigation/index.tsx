import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../Stacks/Detail";
import Setting from "../Screens/Setting";
import Account from "../Stacks/Account";
import MyStock from "../Stacks/MyStock";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="홈">
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
    </Tab.Navigator>
  );
};

export default TabScreen;
