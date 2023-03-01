import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Header from ".";

describe("<Header />", () => {
	it("should render component that match a snapshot", () => {
		const { container } = renderTheme(<Header />);

		expect(container).toMatchSnapshot();
	});
});
