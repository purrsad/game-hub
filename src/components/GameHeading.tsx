import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	} Games`;
	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;
