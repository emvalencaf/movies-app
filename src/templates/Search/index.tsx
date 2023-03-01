// hooks
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// controller
// import ControllerMovies from "../../api/controllers/movies";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MoviesContainer from "../../components/MoviesContainer";
import PaginationMenu from "../../components/PaginationMenu";
import { Movie } from "../../shared-types/fetchMovies";

// styles
import * as Styled from "./styles";
export type SearchTemplateProps = {
	movies: Movie[];
	totalPages: number;
	currentPage: number;
	query: string | string[];
};

const SearchTemplate = ({
	movies,
	totalPages,
	currentPage,
	query,
}: SearchTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Header />
			<Heading as="h2" color="secondary">
				Resultado para: {query}
			</Heading>
			<MoviesContainer movies={movies} />
			<PaginationMenu
				currentPage={currentPage}
				totalPages={totalPages}
				query={query}
			/>
			<GoTop />
			<Footer
				sizes="big"
				ownerName="Edson Mota Valença Filho"
				linkedinURL="http://www.linkedin.com/in/emvalencaf"
				githubURL="http://www.github.com/emvalencaf"
				homepageURL="https://emvalenca.vercel.app/"
			/>
		</Styled.Wrapper>
	);
};

export default SearchTemplate;
