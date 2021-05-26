import { createStackNavigator } from '@react-navigation/stack';
import MainExplore from 'screens/explore/mainExplore';

export default function ExploreStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainExplore} />
        </Stack.Navigator>
    );
}