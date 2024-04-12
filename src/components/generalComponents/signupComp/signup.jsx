// default && react hooks
import React, { useState } from "react";

// styles
import "./signup.scss";

// dependecies
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

// component
const Signup = () => {
  //
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // functions
  //
  // toggle show/hide button for password input
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // toggle show/hide button for confirm password input
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // ???
  const postDetails = (pics) => {};

  // hanlde sing up
  const handelSignup = () => {};

  return (
    <VStack spacing="10px">
      <FormControl id="name" isRequired>
        <FormLabel className="formLabel">Name</FormLabel>
        <Input
          className="inputEl"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>

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

      <FormControl id="confirmPassword" isRequired>
        <FormLabel className="formLabel">Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            className="inputEl"
            placeholder="Confirm the new password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <InputRightElement className="inputRightEl">
            <Button
              className="showButton"
              size="m"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="image">
        <FormLabel className="formLabel">Upload a profile picture</FormLabel>
        <Input
          className="inputEl"
          h={"auto"}
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button onClick={handelSignup}>Sign up</Button>
    </VStack>
  );
};

export default Signup;
