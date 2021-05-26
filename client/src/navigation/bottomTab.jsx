import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from 'src/navigation/homeStack';
import ExploreStack from 'src/navigation/exploreStack';
import EngageStack from 'src/navigation/engageStack';

export default function BottomTabs() {
    // create hook
    const Tabs = AnimatedTabBarNavigator();

    return (
        <Tabs.Navigator
          // default configuration from React Navigation
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "black",
            activeBackgroundColor: "#8947ed"
          }}
          appearance={{
              shadow: "true",
              tabBarBackground: "white",
              dotSize: "medium"
          }}
        >
          <Tabs.Screen name="Home" component={HomeStack} 
                options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="home-sharp"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
                }}
            />
          <Tabs.Screen name="Explore" component={ExploreStack} 
                options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="search-sharp"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
                }}
            />
          <Tabs.Screen name="Engagement" component={EngageStack} 
                options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="pulse-sharp"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
                }}
            />
        </Tabs.Navigator>
    )
}