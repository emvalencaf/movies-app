// hooks
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import ControllerMovies from "../../api/controllers/movies";

// components
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MoviesContainer from "../../components/MoviesContainer";
import PaginationMenu from "../../components/PaginationMenu";

// styles
import * as Styled from "./styles";

// types
import { Movie } from "../../shared-types/fetchMovies";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";
export type HomeTemplateProps = {
	topMovies: Movie[];
	totalPages: number;
	currentPage: number;
};

const HomeTemplate = ({
	topMovies,
	totalPages,
	currentPage,
}: HomeTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Header />
			<Heading as="h2" color="secondary">
				Melhores filmes
			</Heading>
			<MoviesContainer movies={topMovies} />
			<PaginationMenu
				currentPage={currentPage}
				totalPages={totalPages}
				query={null}
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

export default HomeTemplate;
