// hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ControllerMovies from "../../api/controllers/movies";

// components
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MoviesContainer from "../../components/MoviesContainer";
import PaginationMenu from "../../components/PaginationMenu";

// styles
import * as Styled from "./styles";

// types
import { Movie } from "../../shared-types/fetchMovies";

const HomeTemplate = () => {
	// get params
	const router = useRouter();
	const { page: queryPage = 1 } = router.query;
	console.log(queryPage);
	// states
	const [ topMovies, setTopMovies ] = useState<Movie[]>([]);
	const [ totalPages, setTotalPages ] = useState<number>();
	const [ currentPage, setCurrentPage ] = useState<number>();

	// effect
	useEffect(() => {

		const getMovies = async () => {
			const response = await ControllerMovies.getTopMovies(queryPage);
			console.log(response);
			const {
				results,
				page,
				total_pages,
			} = response;

			setTopMovies(() => ([...results]));
			setCurrentPage(() => page);
			setTotalPages(() => total_pages);
		};

		getMovies();

	}, [queryPage, currentPage, totalPages]);

	return (
		<Styled.Wrapper>
			<Header />
			<Heading as="h2" color="primary">
				Melhores filmes
			</Heading>
			<MoviesContainer
				movies={topMovies}
			/>
			<PaginationMenu
				currentPage={currentPage}
				totalPages={totalPages}
				query={null}
			/>
		</Styled.Wrapper>
  );
};

export default HomeTemplate;
