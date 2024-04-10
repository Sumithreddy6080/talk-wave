import React from "react";
import { Container, Box, Text,Tabs,TabList,Tab,TabPanel,TabPanels } from "@chakra-ui/react";
import Login from "../components/Authenrication/Login";
import SignUp from "../components/Authenrication/SignUp";
function HomePage() {
  return (
    <Container maxw="xl" centerContent>
      <Box
        d="flex"
        m={2}
        justifyContent={"center"}
        p={2}
        //  bg={"white"}
        w="100%"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text
          fontSize="2xl"
          fontFamily="work sans"
          color="white"
          align={"center"}
        >
          TALK-WAVE
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="2px">
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab width="50%" >Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
             <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
