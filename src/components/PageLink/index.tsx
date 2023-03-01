// components
import Achor from "../Achor";

// styles
import * as Styled from "./styles";

// types
export type PageLinkProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	showOnlyIcon?: boolean;
	active?: boolean;
	link: string;
};

const PageLink = ({
	children,
	link,
	icon,
	showOnlyIcon = false,
	active = false,
}: PageLinkProps) => {
	return (
		<Styled.ListItem showOnlyIcon={showOnlyIcon} active={active}>
			<Achor link={link} target="_self" icon={!!icon && icon}>
				{children}
			</Achor>
		</Styled.ListItem>
	);
};

export default PageLink;
