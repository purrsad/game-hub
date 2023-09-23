import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<Box width="100%" marginX="15px">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (ref.current) onSearch(ref.current.value);
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
