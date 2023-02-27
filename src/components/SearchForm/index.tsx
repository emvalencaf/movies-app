// hooks
import { useState } from "react";

// components
import Form from "../Form";
import TextInput from "../TextInput";

// styles
import * as Styled from "./styles";

// icons
import { Search } from "@styled-icons/material-outlined";

const SearchForm = () => {
	const [search, setSearch] = useState("");
	return (
		<Styled.Wrapper>
			<Form
				btnIcon={<Search />}
			>
				<TextInput
					type="text"
					name={"search"}
					label={"busque um filme pelo nome.."}
					value={search}
					onInputChange={(v) => setSearch(v)}
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default SearchForm;
