import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);

	return (
		<Box width="100%" marginX="15px">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (ref.current) setSearchText(ref.current.value);
				}}
			>
				<InputGroup>
					<InputLeftElement children={<BsSearch />} />
					<Input
						ref={ref}
						borderRadius={20}
						placeholder="Search titles..."
						variant="filled"
					/>
				</InputGroup>
			</form>
		</Box>
	);
};

export default SearchInput;
