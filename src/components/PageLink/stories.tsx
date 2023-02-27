import { Meta, Story } from '@storybook/react/types-6-0';

// components
import PageLink, { PageLinkProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'PageLink',
	component: PageLink,
	args: mock,
} as Meta<PageLinkProps>;

export const Template: Story<PageLinkProps> = (args) => {
	return (
		<div>
			<PageLink {...args} />
		</div>
	);
};
