// default && hooks
import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// styles
import "./signup.scss";

// dependencies
import axios from "axios";

//  components from dependecies (chackra UI)
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";

// component
const Signup = () => {
  //
  // state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // for user creation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  //
  //hooks
  // const navigate = useNavigate();
  const toast = useToast();
  //
  // ref
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const imageRef = useRef(null);
  //
  // variables
  const signupURL = "http://localhost:5000/api/user/signup";

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

  // hanlde sing up
  const handelSignup = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      image === null
    ) {
      toast({
        title: "Fill all fields.",
        description: "All fields must be entered.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password issue.",
        description: "Password and Confirm password fields must match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    axios
      .post(signupURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
        imageRef.current.value = "";

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setImage(null);
        toast({
          title: "Success.",
          description: "Account has been successfully created.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // navigate("/");
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 410") {
          toast({
            title: "Existing user.",
            description: "This email address is registered alerady.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

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
          ref={nameRef}
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
            ref={confirmPasswordRef}
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
          name="image"
          h={"auto"}
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageRef}
        />
      </FormControl>

      <Button onClick={handelSignup}>Sign up</Button>
    </VStack>
  );
};

export default Signup;
