import 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../assets/logo.svg';
import Input from '../components/Input';
interface LoginData {
  id: string;
  password: string;
}

const LoginScreen = () => {
  const [value, setValue] = useState<LoginData>({id: '', password: ''});
  const onChangeId = (text: string) => {
    setValue({...value, id: text});
  };
  const onChangePassword = (text: string) => {
    setValue({...value, password: text});
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Logo />
        <View style={styles.form}>
          <Input
            value={value.id}
            onChangeFn={onChangeId}
            type="top"
            placeholder="아이디"
          />
          <Input
            value={value.password}
            onChangeFn={onChangePassword}
            type="bottom"
            placeholder="비밀번호"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 45,
    marginBottom: 100,
    justifyContent: 'center',
  },
  contents: {alignItems: 'center', gap: 47},
  form: {width: '100%'},
});

export default LoginScreen;
