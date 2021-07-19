import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Divider,
    useDisclosure,
    Text,
    IconButton,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    IoIosBusiness,
    IoIosFlash,
    IoIosShuffle,
    IoIosPulse,
    IoIosApps,
  } from "react-icons/io";
  import {
    PhoneIcon,
    AddIcon,
    WarningIcon,
    ChevronDownIcon,
    QuestionIcon,
    MoonIcon,
  } from "@chakra-ui/icons";
  
  interface PathItem {
    label: string;
    icon?: React.ReactNode;
  }
  
  type NavigationRootPathType = PathItem & { children?: PathItem[] };
  const Uunc: React.FC<{}> = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });
    // const btnRef:React.RefObject<HTMLButtonElement> | undefined | null = React.useRef<HTMLButtonElement>()
    // if (btnRef == null || btnRef == undefined) { return <div></div> }
  
    const NavigationList: NavigationRootPathType[] = [
      {
        label: "Stacking",
        icon: <IoIosApps />,
      },
      {
        label: "Farming",
        icon: <IoIosPulse />,
      },
  
      {
        label: "Create Pool",
        icon: <IoIosBusiness />,
      },
      {
        label: "Lab",
        icon: <IoIosFlash />,
      },
      {
        label: "Bridge",
        icon: <IoIosShuffle />,
      },
      {
        label: "Guide",
        icon: <QuestionIcon />,
      },
    ];
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          variant=""
          autoFocus={false}
          size="xs"
          // finalFocusRef={btnRef}
        >
          {/* <DrawerOverlay /> */}
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerHeader>App Name</DrawerHeader>
  
            <DrawerBody>
              <div>
                {NavigationList.map((v) => {
                  return (
                    <div
                      style={{
                        padding: "12px 12px",
                        borderRadius: 8,
                        backgroundColor: "#DCE4EB",
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
                        >
                          {v.label}
                        </Text>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  );
                })}
              </div>
            </DrawerBody>
  
            <DrawerFooter>
              <Divider style={{ flex: 1, marginRight: 12 }} />
              <IconButton aria-label="icon">
                <MoonIcon />
              </IconButton>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default Uunc;
  