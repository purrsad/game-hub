import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

/* interface SortSelectorProps {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
} */

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>MenuItem 1</MenuItem>
				<MenuItem>MenuItem 2</MenuItem>
				<MenuItem>MenuItem 3</MenuItem>
				<MenuItem>MenuItem 4</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
