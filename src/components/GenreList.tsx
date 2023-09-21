import {
	Button,
	HStack,
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
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	if (error) return null;

	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => (
					<ListItem key={skeleton} paddingY="5px">
						<HStack>
							<Skeleton boxSize="32px" borderRadius={8} />
							<SkeletonText skeletonHeight="2" />
						</HStack>
					</ListItem>
				))}
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							boxSize="32px"
							borderRadius={8}
						/>
						<Button
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
	);
};

export default GenreList;
