//default
import React from "react";

// styles
import "./HomePage.scss";

//dependencies
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

// components
import Login from "../../generalComponents/loginComp/login";
import Signup from "../../generalComponents/signupComp/signup";

const HomePage = () => {
  return (
    <Container maxWidth="xl" centerContent>
      <Box
        d="flex"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        textAlign={"center"}
        border={"2px solid black"}
        borderRadius={"1rem"}
      >
        <Text fontSize={"xx-large"} fontWeight={"300"}>
          ChatApp
        </Text>
      </Box>

      <Box w={"100%"} border={"2px solid black"} borderRadius={"1rem"}>
        <Tabs variant="soft-rounded" colorScheme="orange" mt={"1rem"}>
          <TabList d={"flex"} justifyContent={"space-around"}>
            <Tab border={"1px solid black"} w={"30%"}>
              Login
            </Tab>

            <Tab border={"1px solid black"} w={"30%"}>
              Sign up
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>

            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
