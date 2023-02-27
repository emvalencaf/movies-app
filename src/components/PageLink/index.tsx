// components
import Achor from '../Achor';

// styles
import * as Styled from './styles';

// types
export type PageLinkProps = {
	children: React.ReactNode;
	link: string;
};

const PageLink = ({ children, link }: PageLinkProps) => {
	return (
		<Styled.ListItem>
			<Achor link={link}>
				{children}
			</Achor>
		</Styled.ListItem>
	);
};

export default PageLink;
