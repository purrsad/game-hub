import { HStack, Heading, Image } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
import logo from "../assets/logo3.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/">
				<Image src={logo} boxSize="70px" padding="10px 0px 10px 10px" />
			</Link>
			{/* <Heading fontWeight="800" fontSize="2xl" marginRight={3}>
				GameHub
			</Heading> */}
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
