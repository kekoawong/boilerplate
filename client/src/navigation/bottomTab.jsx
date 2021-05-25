import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import MainFeed from 'src/feed/mainFeed';

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
              tabBarBackground: "white"
          }}
        >
          <Tabs.Screen name="Home" component={MainFeed} 
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
          <Tabs.Screen name="Explore" component={MainFeed} 
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
          <Tabs.Screen name="Engagement" component={MainFeed} 
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