import { Box, Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.100"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
        ユーザー管理アプリ
      </Heading>
      <Flex align="center" fontSize="sm" flexGrow={2}>
        <Box pr={4}>
          <Flex>ユーザー一覧 </Flex>
        </Box>
        <Flex>設定</Flex>
      </Flex>
    </Flex>
  );
});
