// styles
import * as Styled from "./styles";

// types
import { Movie } from "../../shared-types/fetchMovies";
import MovieCard from "../MovieCard";
export type MoviesContainerProps = {
	movies?: Movie[];
};

const MoviesContainer = ({ movies = [] }: MoviesContainerProps) => {
	return (
		<Styled.Wrapper>
			{movies.length >= 1 &&
				movies.map((movie) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						vote_average={movie.vote_average}
						srcImg={`${process.env.NEXT_PUBLIC_API_IMG}/${movie.poster_path}`}
					/>
				))}
		</Styled.Wrapper>
	);
};

export default MoviesContainer;
