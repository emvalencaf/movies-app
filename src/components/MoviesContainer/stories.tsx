import { Meta, Story } from '@storybook/react/types-6-0';
import MoviesContainer, { MoviesContainerProps } from '.';
import mock from './mock';

export default {
	title: 'MoviesContainer',
	component: MoviesContainer,
	args: mock,
} as Meta<MoviesContainerProps>;

export const Template: Story<MoviesContainerProps> = (args) => {
	return (
		<div>
			<MoviesContainer {...args} />
		</div>
	);
};
