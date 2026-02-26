import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

const attendance = [
  { day: 'Mon', status: 'Present', in: '09:02', out: '18:12' },
  { day: 'Tue', status: 'Present', in: '08:57', out: '18:04' },
  { day: 'Wed', status: 'WFH', in: '09:11', out: '18:30' },
  { day: 'Thu', status: 'Present', in: '08:49', out: '17:58' },
  { day: 'Fri', status: 'Present', in: '09:05', out: '17:55' },
];

export function AttendanceScreen() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={attendance}
      keyExtractor={(item) => item.day}
      ListHeaderComponent={<Text style={styles.title}>Weekly Attendance</Text>}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.meta}>{item.status}</Text>
          <Text style={styles.meta}>{item.in} - {item.out}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    color: colors.text,
    fontWeight: '700',
  },
  meta: {
    color: colors.mutedText,
  },
});
