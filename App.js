import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import OneResScreen from './src/screens/OneResScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  OneRes: OneResScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Buisness Search'
  }
}
);

export default createAppContainer(navigator)