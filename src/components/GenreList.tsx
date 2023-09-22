import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	if (error) return null;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{isLoading &&
					skeletons.map((skeleton) => (
						<ListItem key={skeleton} paddingY="8px">
							<HStack>
								<Skeleton boxSize="32px" borderRadius={8} />
								<SkeletonText skeletonHeight="2" />
							</HStack>
						</ListItem>
					))}
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="8px">
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
