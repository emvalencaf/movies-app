
// components
import TextInput from '../TextInput';
import Form from '../Form';
import SearchForm from '../SearchForm';

// styles
import Achor from '../Achor';
import * as Styled from './styles';

// icons
import { MovieCreation } from "@styled-icons/material-outlined"

const Menu = () => {
	return (
		<Styled.Nav>
			<Styled.Ul>
				<li>
					<Achor link="/" icon={<MovieCreation />}>
						Movies App
					</Achor>
				</li>
			</Styled.Ul>
			<SearchForm />
		</Styled.Nav>
	);
};

export default Menu;
