import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {colors} from '../constants/Colors';

interface InputProps extends TextInputProps {
  value: string;
  onChangeFn: (text: string) => void;
  placeholder: string;
  type: 'top' | 'bottom';
}

const Input = ({
  value,
  onChangeFn,
  placeholder,
  type,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        type === 'top'
          ? {
              borderWidth: 2,
              borderBottomWidth: 1,

              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }
          : {
              borderWidth: 2,
              borderTopWidth: 1,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            },
        focus
          ? {borderColor: colors.PRIMARY_ORANGE}
          : {borderColor: colors.SECONDARY_GRAY},
      ]}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={colors.PRIMARY_GRAY}
        value={value}
        onChangeText={onChangeFn}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingLeft: 15,
  },
  input: {
    fontSize: 16,
    lineHeight: 18,
    textAlignVertical: 'center',
    height: 18,
    padding: 0,
  },
});
export default Input;
