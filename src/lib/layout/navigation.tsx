import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Divider,
  useDisclosure,
  Text,
  IconButton,
  Box,
  DrawerCloseButton,
  Heading
} from "@chakra-ui/react";
import { Visible } from "react-grid-system"
import React, { ReactSVG } from "react";
import {
  IoIosBusiness,
  IoIosFlash,
  IoIosShuffle,
  IoIosPulse,
  IoIosApps,

} from "react-icons/io";
import { useHistory } from 'react-router-dom'
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  QuestionIcon,
  MoonIcon,
} from "@chakra-ui/icons";

interface PathItem {
  label: string;
  icon?: React.ReactNode;
  end?: React.ReactNode;
  path: string
}

type NavigationRootPathType = PathItem & { children?: PathItem[] };
const Uunc: React.FC<{ drawerOpen: boolean, closeDrawer: () => void }> = ({ drawerOpen, closeDrawer }) => {

  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: false });
  // const btnRef:React.RefObject<HTMLButtonElement> | undefined | null = React.useRef<HTMLButtonElement>()
  // if (btnRef == null || btnRef == undefined) { return <div></div> }

  const NavigationList: NavigationRootPathType[] = [
    {
      label: "Stacking",
      icon: <IoIosApps color="#487457" />,
      path: ""
    },
    {
      label: "Farming",
      icon: <IoIosPulse color="#487457" />,
      path: "farming"
    },

    {
      label: "Create Pool",
      icon: <IoIosBusiness color="#487457" />,
      end: < AddIcon color="#487457" />,
      path: "create-pool"
    },
    {
      label: "Lab",
      icon: <IoIosFlash color="#487457" />,
      path: "lab"
    },
    {
      label: "Bridge",
      icon: <IoIosShuffle color="#487457" />,
      path: "bridge"
    },
    {
      label: "Guide",
      icon: <QuestionIcon color="#487457" />,
      path: "guide"
    },
  ];

  const NavPathsHere = (
    <div>
      {NavigationList.map((v) => {
        return (
          <Box
            background="grey"
            onClick={() => {
              history.push(v.path);
            }}
            _hover={{ background: "#E3E2E2", color: "white" }}
            bg="#F6F7F7"
            style={{
              padding: "12px 12px",
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {v.icon ?? <div></div>}
              <Text
                style={{ flex: 1, paddingLeft: 12 }}
                fontWeight="bold"
                color="#474646"
              >
                {v.label}
              </Text>
              {v.end ?? <ChevronRightIcon />}
            </div>
          </Box>
        );
      })}
    </div>
  )


  const DesktopDContent = (
    <Box w="320px"
      h="100vh"
      borderRight="1px solid rgba(200,200,200,.2)"
      pos="fixed"
      left="0"
      display="flex"
      flexDirection="column"
      top="0">
      <Box p="16px 24px">
        <Heading fontSize="2xl">  #Project name</Heading>
      </Box>

      <Box flex="1" p="16px 24px">
        {NavPathsHere}
      </Box>
      <Box p="16px 24px" display="flex" alignItems="center">
        <Divider style={{ flex: 1, marginRight: 12 }} />
        <IconButton aria-label="icon">
          <MoonIcon />
        </IconButton>
      </Box>
    </Box>
  )


  return (
    <>
      <Visible lg xl xxl>
        {DesktopDContent}
      </Visible>

      <Visible xs sm md >
        <Drawer
          isOpen={drawerOpen}
          placement="left"
          onClose={onClose}
          variant=""
          autoFocus={false}
          size="xs"
        // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton onClick={() => {
              closeDrawer();
            }} />
            <DrawerHeader>App Name</DrawerHeader>

            <DrawerBody>
              {NavPathsHere}
            </DrawerBody>

            <DrawerFooter>
              <Divider style={{ flex: 1, marginRight: 12 }} />
              <IconButton aria-label="icon">
                <MoonIcon />
              </IconButton>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Visible>
    </>
  );
};

export default Uunc;
