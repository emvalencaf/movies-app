import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import Menu from '.';

describe('<Menu />', () => {
	it('should render component that match a snapshot', () => {
		const { container } = renderTheme(<Menu />);

		expect(container).toMatchSnapshot();
	});
});
