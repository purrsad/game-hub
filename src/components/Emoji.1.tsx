import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { EmojiProps } from "./Emoji";

export const Emoji = ({ rating }: EmojiProps) => {
	if (rating < 3) return null;

	const emojiMap = {
		3: { src: meh, alt: "meh" },
		4: { src: thumbsUp, alt: "recommended" },
		5: { src: bullsEye, alt: "exceptional" },
	};

	return <Image />;
};
