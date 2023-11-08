import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface GameScreenshotsProps {
	gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
	const { data, error, isLoading } = useScreenshots(gameId);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
			{data?.results.map((file) => (
				<Image key={file.id} src={file.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
