import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
	children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
	return (
		<Box
			borderRadius={10}
			_hover={{
				transform: "scale(1.03)",
				transition: "transform .15s ease-in",
			}}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
