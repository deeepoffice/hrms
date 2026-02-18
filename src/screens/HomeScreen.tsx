import { RouteProp } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { StatCard } from '../components/StatCard';
import { MainTabParamList } from '../navigation/MainTabs';
import { colors } from '../theme/colors';

type HomeRoute = RouteProp<MainTabParamList, 'Home'>;

export function HomeScreen({ route }: { route: HomeRoute }) {
  const { employeeName, companyCode } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hi, {employeeName}</Text>
      <Text style={styles.sub}>Company: {companyCode}</Text>

      <View style={styles.grid}>
        <StatCard label="Attendance" value="96%" hint="This month" />
        <StatCard label="Leave Balance" value="12" hint="Days available" />
      </View>

      <View style={styles.grid}>
        <StatCard label="Pending Approvals" value="1" hint="Timesheet" />
        <StatCard label="Last Payslip" value="Paid" hint="Jan 2026" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 18,
    gap: 10,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  sub: {
    color: colors.mutedText,
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    gap: 10,
  },
});
