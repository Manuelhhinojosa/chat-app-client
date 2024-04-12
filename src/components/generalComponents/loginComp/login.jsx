// default && react hooks
import React, { useState } from "react";

// dependecies
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

const Login = () => {
  //
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // functions
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = () => {};

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel className="formLabel">Email</FormLabel>
        <Input
          className="inputEl"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel className="formLabel">Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            className="inputEl"
            placeholder="Enter a new password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement className="inputRightEl">
            <Button
              className="showButton"
              size="m"
              onClick={handleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button onClick={handleSignin}>Sign in</Button>
      <Button
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get guest user credentials
      </Button>
    </VStack>
  );
};

export default Login;
