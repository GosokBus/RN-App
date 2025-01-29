import 'react';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/logo.svg';
import Input from '../components/Input';
import {colors} from '../constants/Colors';
import {useAuth} from '../hooks/useAuth';
import {getEncryptedStorage} from '../utils/encryptedStorage';
import {LoginData} from '../utils/types';

const LoginScreen = () => {
  const {loginMutation} = useAuth();
  const [value, setValue] = useState<LoginData>({id: '', pw: ''});
  const onChangeId = (text: string) => {
    setValue({...value, id: text});
  };
  const onChangePassword = (text: string) => {
    setValue({...value, pw: text});
  };

  const fulfilled = value.id && value.pw;
  console.log(getEncryptedStorage('refreshToken'));
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
            value={value.pw}
            onChangeFn={onChangePassword}
            type="bottom"
            placeholder="비밀번호"
            secureTextEntry={true}
          />
        </View>
        <Pressable
          onPress={() => {
            loginMutation.mutate(value);
          }}
          style={[
            styles.loginBtn,
            fulfilled && {backgroundColor: colors.PRIMARY_ORANGE},
          ]}>
          <Text style={{color: '#fff', fontSize: 16}}>로그인</Text>
        </Pressable>
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
  loginBtn: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#B6B5B9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});

export default LoginScreen;
