// hooks
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// controller
import ControllerMovies from '../../api/controllers/movies';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MoviesContainer from '../../components/MoviesContainer';
import PaginationMenu from '../../components/PaginationMenu';
import { Movie } from '../../shared-types/fetchMovies';

// styles
import * as Styled from './styles';


const SearchTemplate = () => {
	// get search params
	const router = useRouter();
	const { q: query = "", page: queryPage = 1 } = router.query;

	// states
	const [movies, setMovies] = useState<Movie[]>([]);
	const [totalPages, setTotalPages] = useState<number>();
	const [currentPage, setCurrentPage] = useState<number>();

	// effects
	useEffect(() => {

		const getMovies = async () => {
			const response = await ControllerMovies.getSearchedMovies(query, queryPage);
			console.log(response);
			const {
				results,
				page,
				total_pages,
			} = response;

			setMovies(() => ([...results]));
			setCurrentPage(() => page);
			setTotalPages(() => total_pages);
		};

		getMovies();
	}, [query, queryPage, currentPage, totalPages]);

	return (
		<Styled.Wrapper>
			<Header />
			<Heading as="h2" color="secondary">
				Resultado para: {query}
			</Heading>
			<MoviesContainer
				movies={movies}
			/>
			<PaginationMenu
				currentPage={currentPage}
				totalPages={totalPages}
				query={query}
			/>
			<GoTop />
			<Footer
				ownerName='Edson Mota Valença Filho'
				linkedinURL="http://www.linkedin.com/in/emvalencaf"
				githubURL="http://www.github.com/emvalencaf"
				homepageURL="https://emvalenca.vercel.app/"
			/>
		</Styled.Wrapper>
	);
};

export default SearchTemplate;
