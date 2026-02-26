import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

const payslips = [
  { month: 'Jan 2026', amount: '₹78,000', status: 'Credited' },
  { month: 'Dec 2025', amount: '₹78,000', status: 'Credited' },
  { month: 'Nov 2025', amount: '₹78,000', status: 'Credited' },
];

export function PayslipScreen() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={payslips}
      keyExtractor={(item) => item.month}
      ListHeaderComponent={<Text style={styles.title}>Payslips</Text>}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.month}>{item.month}</Text>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 18,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  row: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    gap: 2,
  },
  month: {
    color: colors.text,
    fontWeight: '700',
  },
  amount: {
    color: colors.success,
    fontSize: 18,
    fontWeight: '700',
  },
  status: {
    color: colors.mutedText,
  },
});
