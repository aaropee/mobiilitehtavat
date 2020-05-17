import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import Classes from '../screens/classes';
import Result from '../screens/result';
import Index from '../screens/index';

const screens = {
    Index: {
        screen: Index
    },
    Classes: {
        screen: Classes
    },
    Result: {
        screen: Result
    }
}

const MainNavigator = createStackNavigator(screens);
export default createAppContainer(MainNavigator);