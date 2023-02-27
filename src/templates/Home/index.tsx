// hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ControllerMovies from "../../api/controllers/movies";

// components

// styles
import * as Styled from "./styles";

// types
import { Movie } from "../../shared-types/fetchMovies";
import Heading from "../../components/Heading";

const Home = () => {
	// get params
	const router = useRouter();
	const { page: queryPage } = router.query;

	// states
	const [ topMovies, setTopMovies ] = useState<Movie[]>([]);
	const [ totalPages, setTotalPages ] = useState<number | string>();
	const [ currentPage, setCurrentPage ] = useState<number | string>();

	// effect
	useEffect(() => {
		// flag to clean the featch
		let wait: boolean = false;

		const controller = new AbortController();
		const signal = controller.signal;

		const getMovies = async () => {

			const response = await ControllerMovies.getTopMovies(queryPage, signal)

			const {
				results,
				page,
				total_pages,
			} = response;

			setTopMovies(() => ([...results]));
			setCurrentPage((s) => page);
			setTotalPages((s) => total_pages);
		}

		if (!wait) getMovies();

		// clean memory to avoid memory leak
		return () => {
			wait = true;
			controller.abort();
		}

	}, [queryPage]);


	return (
		<Styled.Wrapper>
			<Heading as="h2" color="primary">
				Melhores filmes
			</Heading>
		</Styled.Wrapper>
  );
};

export default Home;
