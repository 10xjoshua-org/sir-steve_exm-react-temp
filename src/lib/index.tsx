import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./layout/index"
import { BrowserRouter as Router, Switch } from "react-router-dom";

const AppUIInit: React.FC<{}> = ({ children }) => {
    return (
        <ChakraProvider>
            <Router>
                <div>
                    {children}
                </div>
            </Router>
        </ChakraProvider>
    )
}

export default function func() {

    return (<AppUIInit>

        <Layout />

    </AppUIInit>);
}