import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Flex bg="gray.500" p={4} color="white">
        <Box p="2">Stock Strategy Simulator</Box>
        <Box p="2" ml="auto">
          <Link
            to="/dashboard"
            style={{ padding: "8px", color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/strategy-simulator"
            style={{ padding: "8px", color: "white", textDecoration: "none" }}
          >
            Strategy Simulator
          </Link>
          <Link
            to="/stock-picker"
            style={{ padding: "8px", color: "white", textDecoration: "none" }}
          >
            Stock Picker
          </Link>
        </Box>
      </Flex>
    </>
  );
}
