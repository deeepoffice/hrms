import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function LeaveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Management</Text>

      <View style={styles.card}>
        <Text style={styles.balance}>12 Days Available</Text>
        <Text style={styles.meta}>Annual Leave Balance</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Request Leave</Text>
      </Pressable>

      <Text style={styles.helper}>Upcoming leave: 14 Feb - 15 Feb (Pending)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 18,
    gap: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  card: {
    backgroundColor: colors.primarySoft,
    borderRadius: 14,
    padding: 16,
  },
  balance: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
  },
  meta: {
    color: colors.mutedText,
    marginTop: 4,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  helper: {
    color: colors.mutedText,
  },
});
