import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Toolbar, ToolbarContent, ToolbarAction, ToolbarBackAction, DrawerSection, DrawerItem } from 'react-native-paper';

import Screen from '../screen';

for (let screen_name in Screen) {
    //console.log(screen_name);
    if (screen_name == 'Notas')
	continue;

    Screen[screen_name].navigationOptions.header = (
        <Toolbar>
            <ToolbarBackAction onPress={({ navigation }) => navigation.goBack()} />
        <ToolbarContent title="{Screen[screen_name].title}"/>
        </Toolbar>
    );
}

const AppNavigator = createStackNavigator({
    Home: Screen.Notas,
    Login: Screen.Login
},{
    navigationOptions: ({ navigation }) => ({
      header: (
      <Toolbar>
        <ToolbarAction icon="menu" onPress={() => navigation.openDrawer()}/>
        <ToolbarContent title="Notas"/>
      </Toolbar>
      )
    })
});

let DrawerItemProps = Object.keys(Screen).map((screen_name, index) => {
    return {
	label: Screen[screen_name].navigationOptions.title || screen_name,
	key: index
    };
});

const AuthNavigator = createStackNavigator({
    Login: Screen.Login
});

export default createDrawerNavigator({
    Home: AppNavigator
}, {
    contentComponent: ({navigation}) => (
        <View style={styles.drawerContent}>
            <DrawerSection title="Direito">
            {DrawerItemProps.map((props) => (
                    <DrawerItem  {...props} onPress={() => console.log(typeof navigation, Object.keys(navigation))}/>
            ))}
            </DrawerSection>
        </View>
    )
});

const styles = StyleSheet.create({
    drawerContent: {
	flex: 1,
	paddingTop: Platform.OS === 'android' ? 25 : 22
    }
});
