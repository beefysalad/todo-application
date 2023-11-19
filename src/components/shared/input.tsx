import theme, { Box, Text } from "@/utils/themes";
import { FieldError } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type InputProps = {
  label: string;
  error?: FieldError | undefined;
} & TextInputProps;
const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection='column' mb='6'>
      {error ? (
        <Text color='rose500' mb='3.5'>
          {label} is required
        </Text>
      ) : (
        <Text variant='textXs' textTransform='uppercase' mb='3.5'>
          {label}
        </Text>
      )}

      <TextInput
        placeholder={label}
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-7xl"],
        }}
        {...props}
      />
    </Box>
  );
};
export default Input;
