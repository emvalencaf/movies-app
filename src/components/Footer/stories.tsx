import { Meta, Story } from '@storybook/react/types-6-0';
import Footer, { FooterProps } from '.';
import mock from './mock';

export default {
	title: 'Footer',
	component: Footer,
	args: mock,
} as Meta<FooterProps>;

export const Template: Story<FooterProps> = (args) => {
	return (
		<div>
			<Footer {...args} />
		</div>
	);
};
