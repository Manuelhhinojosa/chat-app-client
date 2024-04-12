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
    <Container className="container">
      <Box className="boxTop">
        <Text fontSize={"xx-large"}>ChatApp</Text>
      </Box>

      <Box className="boxBottom">
        <Tabs className="tabs" variant="soft-rounded" colorScheme="gray">
          <TabList className="tabList" justifyContent={"space-around"}>
            <Tab className="tab">Login</Tab>
            <Tab className="tab">Sign up</Tab>
          </TabList>

          {/* here */}

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
