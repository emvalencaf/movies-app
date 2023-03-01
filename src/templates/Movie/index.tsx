// components
import Heading from "../../components/Heading";
import MovieCard from "../../components/MovieCard";
import Footer from "../../components/Footer";

// styles
import * as Styled from "./styles";

// icon
import {
	FormatQuote,
	Wallet,
	Money,
	Description,
	Timer,
	Speaker,
	TheaterComedy,
	Language,
	Cases,
} from "@styled-icons/material-outlined";

// types
import { MoviePageProps } from "../../shared-types/fetchMovies";

// utils
import FormatTimeString from "../../utils/formatTimeString";
import Header from "../../components/Header";
import GoTop from "../../components/GoTop";

const MovieTemplate = ({ movie }: MoviePageProps) => {
	return (
		<Styled.Wrapper>
			<Header />
			<MovieCard
				id={movie.id}
				title={movie.title}
				srcImg={`${process.env.NEXT_PUBLIC_API_IMG}/${movie.poster_path}`}
				vote_average={movie.vote_average}
				showLink={false}
			/>
			<Styled.TaglineContainer>
				<FormatQuote />
				{movie.tagline}
				<FormatQuote />
			</Styled.TaglineContainer>
			<Styled.ContainerDetails>
				<Heading as="h3" size="medium">
					<Wallet />
					Orçamento
				</Heading>
				<p>
					{movie.budget.toLocaleString("pt-br", {
						style: "currency",
						currency: "USD",
					})}
				</p>
				<Heading as="h3" size="medium">
					<Money />
					Receita
				</Heading>
				<p>
					{movie.revenue.toLocaleString("pt-br", {
						style: "currency",
						currency: "USD",
					})}
				</p>
				<Heading as="h3" size="medium">
					<Cases />
					{movie.production_companies.length > 1
						? "Produtoras"
						: "Produtora"}
				</Heading>
				<Styled.Ul>
					{movie.production_companies.map((company) => (
						<Styled.Item key={company.id}>
							{company.name}
						</Styled.Item>
					))}
				</Styled.Ul>

				<Heading as="h3" size="medium">
					<Language />
					País da Filmagem
				</Heading>
				<Styled.Ul>
					{movie.production_countries.map((country) => (
						<Styled.Item key={country.iso_3166_1}>
							{country.name}
						</Styled.Item>
					))}
				</Styled.Ul>
				<Heading as="h3" size="medium">
					<Timer />
					Duração
				</Heading>
				<p>{FormatTimeString.minutesToHour(Number(movie.runtime))}</p>
				<Heading as="h3" size="medium">
					<TheaterComedy />
					Gênero
				</Heading>
				<Styled.Ul>
					{movie.genres.map((genre) => (
						<Styled.Item key={genre.id}>{genre.name}</Styled.Item>
					))}
				</Styled.Ul>
				<Heading as="h3" size="medium">
					<Speaker />
					Língua Original
				</Heading>
				<Styled.Ul>
					{movie.spoken_languages.map((language) => (
						<Styled.Item key={language.iso_639_1}>
							{language.english_name}
						</Styled.Item>
					))}
				</Styled.Ul>
				<Heading as="h3" size="medium">
					<Description />
					Descrição
				</Heading>
				<p>{movie.overview}</p>
			</Styled.ContainerDetails>
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

export default MovieTemplate;
