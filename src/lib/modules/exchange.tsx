import { SearchIcon } from "@chakra-ui/icons";
import {
    Box, Button, Center, Divider, Flex, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, Spacer, Tab, Table, TableCaption, TabList, Tabs,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React from "react";
import { AppPageBodySection } from "../components/pageBody";
import {IoLogoBitcoin,IoArrowDownSharp} from "react-icons/io5"

const Screen: React.FC<{}> = () => {
    return (
        <div>

            <AppPageBodySection>
                <Heading>Trade Tokens</Heading>
                <Spacer h="6" />
                <Divider />
                <Spacer h="6" />
                <Tabs variant="soft-rounded" colorScheme="green" m="auto" justifyItems="center">
                    <Flex direction={{ md: "column", base: "column" }} justify="center">
                        <TabList justifyItems="center" justifyContent="center">
                            <Tab>Swap</Tab>
                            <Tab>Liquidity</Tab>
                        </TabList>
                    </Flex>
                    <Spacer h="8" />
                </Tabs>

                <div style={{ overflow: "hidden" }}>
                   
                    <Box m="auto" w={{ md: "50%" }} bg="rgba(200,200,200,.2)" p="24px" rounded="lg" boxShadow="lg" mb="24px">
                        <Box>
                            <Heading size="md">Exchange</Heading>
                            <Text>Trade tokens in an instant</Text>
                            <Spacer h="4" />
                            <Divider/>
                            <Spacer h="4" />
                        </Box>
                        <Box my={"16px"} bg="rgba(200,200,200,.2)" p="8px" borderRadius={"md"}>
                            <Text>To</Text>
                            <InputGroup size="sm">
                                <Input disabled={false} placeholder="0.0" variant="unstyled" p="12px" />
                                <InputRightAddon children={<IoLogoBitcoin/>}  bg="transparent"/>
                            </InputGroup>
                        </Box>
                        <Center>
                            <IoArrowDownSharp/>
                        </Center>
                        <Box my={"16px"} bg="rgba(200,200,200,.2)" p="8px" borderRadius={"md"}>
                            <Text>From</Text>
                            <InputGroup size="sm">
                                <Input disabled={false} placeholder="0.0" variant="unstyled" p="12px" />
                                <InputRightAddon children={<IoLogoBitcoin/>} bg="transparent" />
                            </InputGroup>
                        </Box>

                      
                        <Button size="lg" m="auto" as={Box} colorScheme="red" isFullWidth>Swap</Button>
                    </Box>
                   
                </div>
            </AppPageBodySection>
        </div>
    );
}

export default Screen
