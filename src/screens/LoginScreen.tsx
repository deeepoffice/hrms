import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { colors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [companyCode, setCompanyCode] = useState('needeesync');
  const [email, setEmail] = useState('employee@needeesync.com');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing details', 'Please enter your email and password.');
      return;
    }

    navigation.replace('MainTabs', {
      employeeName: 'Employee User',
      companyCode,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeedeeSync HRMS</Text>
      <Text style={styles.subtitle}>Employee Self Service Mobile App</Text>

      <Text style={styles.label}>Company Code</Text>
      <TextInput value={companyCode} onChangeText={setCompanyCode} style={styles.input} autoCapitalize="none" />

      <Text style={styles.label}>Work Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" keyboardType="email-address" />

      <Text style={styles.label}>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <Text style={styles.caption}>API Host: https://www.needeesync.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    color: colors.mutedText,
  },
  label: {
    marginBottom: 8,
    color: colors.mutedText,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  caption: {
    textAlign: 'center',
    marginTop: 16,
    color: colors.mutedText,
    fontSize: 12,
  },
});
