import {
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import AppNavigation from "./navigation"
import {
 
} from "@chakra-ui/icons";

interface PathItem {
  label: string;
  icon?: React.ReactNode;
}

type NavigationRootPathType = PathItem & { children?: PathItem[] };
const Uunc: React.FC<{}> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });
  // const btnRef:React.RefObject<HTMLButtonElement> | undefined | null = React.useRef<HTMLButtonElement>()

  
  return (
    <div>
      <AppNavigation/>

      <div style={{
        position:"absolute",
        top:0,
        left:296,
        width:"calc(100vw - 296px )",
        height:"100vh",
        background:"orange"
      }}>

        <div>
          
        </div>

      </div>

    </div>
  )
};

export default Uunc;
