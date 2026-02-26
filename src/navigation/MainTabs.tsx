import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AttendanceScreen } from '../screens/AttendanceScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LeaveScreen } from '../screens/LeaveScreen';
import { PayslipScreen } from '../screens/PayslipScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type MainTabParamList = {
  Home: { employeeName: string; companyCode: string };
  Attendance: undefined;
  Leave: undefined;
  Payslips: undefined;
  Profile: { employeeName: string; companyCode: string };
};

const Tab = createBottomTabNavigator<MainTabParamList>();

type MainTabsProps = {
  employeeName: string;
  companyCode: string;
};

export function MainTabs({ employeeName, companyCode }: MainTabsProps) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ employeeName, companyCode }} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Leave" component={LeaveScreen} />
      <Tab.Screen name="Payslips" component={PayslipScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ employeeName, companyCode }} />
    </Tab.Navigator>
  );
}
