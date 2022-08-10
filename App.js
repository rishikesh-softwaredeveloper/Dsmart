import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyScreen from './screens/survey-screen';
import Dashboard from './screens/dashboard';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='SurveyScreen'
            component={SurveyScreen}
            options={{title:'QoL Survey - Daily',headerTitleAlign:'center'}}
          />
          <Stack.Screen 
            name='Dashboard'
            component={Dashboard}
            options={{title:'Dashboard',headerTitleAlign:'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1
  }
});
