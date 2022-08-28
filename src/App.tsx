import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>ああああ</p>
    </ChakraProvider>
  );
}
