// default && react hooks && router hooks
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// components from dependecies
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";

// dependencies
import axios from "axios";

const Login = () => {
  //
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const data = { email: email, password: password };

  // ref
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // hooks
  const toast = useToast();
  const navigate = useNavigate();

  // variables
  const loginURL = "http://localhost:5000/api/user/login";

  // functions
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast({
        title: "Fill all the fields.",
        description: "All fields must be entered.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    axios
      .post(loginURL, data)
      .then((response) => {
        emailRef.current.value = "";
        passwordRef.current.value = "";

        setEmail("");
        setPassword("");

        navigate("/chats");
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Enter valid email/password",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

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
          ref={emailRef}
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
            ref={passwordRef}
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
      {/* <Button
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get guest user credentials
      </Button> */}
    </VStack>
  );
};

export default Login;
