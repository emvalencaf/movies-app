// controller
import ControllerMovies from "../../api/controllers/movies";

// templates
import MovieTemplate from "../../templates/Movie";

// types
import { GetServerSideProps } from "next/types";
import { MoviePageProps } from '../../shared-types/fetchMovies';

export default function MoviePage({movie}:MoviePageProps) {
  return <MovieTemplate movie={movie} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params;

	const movie = await ControllerMovies.getMovie(id);

	return {
		props: {
			movie,
		},
	}
}