import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
    Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Input, InputGroup,
    InputLeftElement, Box, Text, Spacer, Progress, Button, Heading, Divider
} from "@chakra-ui/react";
import React from "react";
import { AppPageBodySection } from "../components/pageBody";
import { AppPageCoverSection } from '../components/pageCoverSection';


const Screen: React.FC<{}> = () => {
    return (
        <div style={{ overflow: "auto" }}>
            <AppPageBodySection>
                <Heading>Guide</Heading>
                <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList my="16px">
                        <Tab>Staking</Tab>
                        <Tab>Create Pool</Tab>
                   
                        <Tab>Bridge</Tab>
                        <Tab>Others</Tab>
                    </TabList>
                    <Divider />
                </Tabs>

            </AppPageBodySection>
        </div>
    );
}

export default Screen


