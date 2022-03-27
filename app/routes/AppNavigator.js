import * as React from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import Pagination from '../../src/components/Pagination/Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchContracts} from '../store/contractsSlide/contracts.reducers';

function HomeScreen({navigation}) {
  const RenderItem = ({item}) => (
    <View>
      <Text>{item._id}</Text>
    </View>
  );

  const dispatch = useDispatch();
  const contracts = useSelector(state => state.contracts.entities);

  useEffect(() => {
    dispatch(fetchContracts());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'yellow',
      }}>
      <SearchBar />
      <FlatList data={contracts} renderItem={RenderItem} />
      <Pagination />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
