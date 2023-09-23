import { HStack, Heading, Image } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
import logo from "../assets/logo2.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			{/* <Heading fontSize="xl">GameHub</Heading> */}
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
