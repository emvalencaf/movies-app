import { Meta, Story } from '@storybook/react/types-6-0';
import MovieCard, { MovieCardProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'MovieCard',
	component: MovieCard,
	args: mock
} as Meta<MovieCardProps>;

export const Template: Story<MovieCardProps> = (args) => {
	return (
		<div>
			<MovieCard {...args} />
		</div>
	);
};
