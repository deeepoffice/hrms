import { RouteProp } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { MainTabParamList } from '../navigation/MainTabs';
import { colors } from '../theme/colors';

type ProfileRoute = RouteProp<MainTabParamList, 'Profile'>;

export function ProfileScreen({ route }: { route: ProfileRoute }) {
  const { employeeName, companyCode } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.card}>
        <Text style={styles.name}>{employeeName}</Text>
        <Text style={styles.meta}>Company: {companyCode}</Text>
        <Text style={styles.meta}>Department: Engineering</Text>
        <Text style={styles.meta}>Manager: HR Admin</Text>
        <Text style={styles.meta}>Employee ID: NS-1042</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    gap: 6,
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  meta: {
    color: colors.mutedText,
  },
});
