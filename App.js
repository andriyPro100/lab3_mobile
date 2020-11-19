import React from 'react';
import {View, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Data from "./src/data";
import ItemFilm from "./src/Item";

function FindScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Find</Text>
        </View>
    )
}

function HomeScreen({navigation}) {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <ItemFilm title={item.Title} year={item.Year} type={item.Type} poster={item.Poster}/>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

function NothingScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Nothing</Text>
        </View>
    );
}

const HStack = createStackNavigator();

function HomeStackScreen(){
    return (
        <Stack.Navigator>
            <HStack.Screen name='Home' component={HomeScreen}/>
            <HStack.Screen name="Find" component={FindScreen}/>
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

function NothingStackScreen(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Nothing" component={NothingScreen}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function App() {
    return (
        <NavigationContainer initialRouteName="Home">
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name='Nothing' component={NothingStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default App;
