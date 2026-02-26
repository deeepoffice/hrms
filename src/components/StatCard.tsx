import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
  icon?: string;
};

export function StatCard({ label, value, hint, icon }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>{label}</Text>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      </View>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.mutedText,
    fontSize: 13,
  },
  icon: {
    fontSize: 18,
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
