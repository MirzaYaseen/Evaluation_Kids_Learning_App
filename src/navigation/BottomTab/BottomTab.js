import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens'
import { _VectorIcons, _Image } from '../../components'
import { theme } from '../../constants'
import { screenNames } from '../screenNames'

export const commanHeaderStyle = {
    headerStyle: {
        backgroundColor: theme.colors.primary,
    },
    headerTintColor: theme.colors.headerTintColor,
    headerTitleStyle: {},
    headerShown: false,
};


const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
            shifting={true}
            tabBarOptions={{
                activeTintColor: theme.colors.saftySecondry,
                activeBackgroundColor: theme.colors.saftyPrimary,
                inactiveBackgroundColor: theme.colors.saftyPrimary,
                showLabel: false,
            }}>


            <Tab.Screen
                name={screenNames.home.name}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (

                        <_VectorIcons type='Entypo' name='home' size={20}
                            color={
                                focused ? theme.colors.saftySecondry : theme.colors.shadow
                            }
                        />
                    ),
                }}
            />



        </Tab.Navigator>
    )
}


const BottomTab = () => {
    return <Tabs />
}

export { BottomTab }