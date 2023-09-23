import { HStack, Heading, Image } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
import logo from "../assets/logo3.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="70px" padding="10px 0px 10px 10px" />
			{/* <Heading fontWeight="800" fontSize="2xl" marginRight={3}>
				GameHub
			</Heading> */}
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
