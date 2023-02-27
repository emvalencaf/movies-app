// components
import Heading from '../Heading';
import Achor from '../Achor';
import Picture from '../Picture';

// styles
import * as Styled from './styles';

// icons
import { Star } from "@styled-icons/material-outlined"

// types
export type MovieCardProps = {
	id: string;
	title: string;
	vote_average: string | number;
	srcImg: string;
	showLink?: boolean;
};

const MovieCard = ({ id, title, vote_average, srcImg, showLink = true }: MovieCardProps) => {
	return (
		<Styled.Wrapper>
			<Picture srcImg={srcImg} />
			<Heading as="h2" color="primary">
				{title}
			</Heading>
			<Styled.ContainerRating>
				<Star /> {vote_average}
			</Styled.ContainerRating>
			{ showLink && <Achor link={`/movie/${id}`}>Detalhes</Achor>}
		</Styled.Wrapper>
	);
};

export default MovieCard;
