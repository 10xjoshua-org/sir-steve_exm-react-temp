import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
    Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Input, InputGroup,
    InputLeftElement, Box, Text, Spacer, Progress, Button, Heading, Divider
} from "@chakra-ui/react";
import React from "react";
import { AppPageBodySection } from "../components/pageBody";
import { AppPageCoverSection } from '../components/pageCoverSection';


const Screen: React.FC<{}> = () => {
    const [tabIndex, setTabIndex] = React.useState(0)
    const handleTabsChange = (index: number) => {
        setTabIndex(index)
    }


    const guides = ['Staking', 'Create Pool', 'Bridge', 'Others']

    return (
        <div style={{ overflow: "auto" }}>

            <AppPageBodySection>
                <Heading>Guide</Heading>
                <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList my="16px">
                        {guides.map((v, index) => {
                            return <Tab key={index} onClick={() => {

                                // setTabIndex(index);
                            }}>{v}</Tab>
                        })}
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </AppPageBodySection>
        </div>
    );
}

export default Screen


