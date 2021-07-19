import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./layout/index"

const AppUIInit: React.FC<{}> = ({ children }) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default function func() {

    return (<AppUIInit>
        <div style={{ background: "#ECECEC", height: "100vh" }}>
            <Layout />
        </div>
    </AppUIInit>);
}