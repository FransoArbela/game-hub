import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
            <Image src={logo} boxSize="60px" alt="logo" />
            <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar