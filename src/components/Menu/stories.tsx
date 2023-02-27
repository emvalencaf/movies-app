import { Meta, Story } from '@storybook/react/types-6-0';
import Menu from '.';

export default {
	title: 'Menu',
	component: Menu,
} as Meta;

export const Template: Story = () => {
	return (
		<div>
			<Menu />
		</div>
	);
};
