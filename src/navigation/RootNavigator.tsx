import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { MainTabs } from './MainTabs';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: { employeeName: string; companyCode: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="MainTabs"
          component={({ route }) => (
            <MainTabs employeeName={route.params.employeeName} companyCode={route.params.companyCode} />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
