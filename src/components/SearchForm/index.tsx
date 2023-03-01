// hooks
import { useState } from "react";
import { useRouter } from "next/router";

// components
import Form from "../Form";
import TextInput from "../TextInput";

// styles
import * as Styled from "./styles";

// icons
import { Search } from "@styled-icons/material-outlined";

const SearchForm = () => {
	// states
	const [search, setSearch] = useState("");

	// redirect
	const router = useRouter();

	// handleSubmit

	const handleSubmit = () => {
		if (!search) return;

		// redirect to search page
		router.push(`/search?q=${search}`);
	};

	return (
		<Styled.Wrapper>
			<Form btnIcon={<Search />} onSubmit={handleSubmit}>
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
