import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 14,
    flex: 1,
    gap: 6,
  },
  label: {
    color: colors.mutedText,
    fontSize: 13,
  },
  value: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  hint: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
});
