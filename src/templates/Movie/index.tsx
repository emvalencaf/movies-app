// hooks
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// components
import Heading from '../../components/Heading';
import MovieCard from '../../components/MovieCard';

// styles
import * as Styled from './styles';

// icon
import { FormatQuote, Wallet, Money } from "@styled-icons/material-outlined"

// types
import { MoviePageProps } from '../../shared-types/fetchMovies';


const MovieTemplate = ({ movie }: MoviePageProps) => {
	console.log(movie);
	return (
		<Styled.Wrapper>
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
					{movie.budget.toLocaleString("pt-br", {style:"currency", currency: "USD"})}
				</p>
				<Heading as="h3" size="medium">
					<Money />
					Receita
				</Heading>
				<p>
					{movie.revenue.toLocaleString("pt-br", {style:"currency", currency: "USD"})}
				</p>
				<Heading as="h3" size="medium">
					<Money />
					Duração
				</Heading>
				<Heading as="h3" size="medium">
					<Money />
					Receita
				</Heading>
				<Heading as="h3" size="medium">
					<Money />
					Receita
				</Heading>
			</Styled.ContainerDetails>
		</Styled.Wrapper>
	);
};

export default MovieTemplate;
