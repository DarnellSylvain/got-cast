import React, { useEffect, useState } from "react";
import "./App.css";
import headerTitle from "./images/Game_of_Thrones_logo_logotype_wordmark.png";
import CharacterGrid from "./components/CharacterGrid";
import axios from "axios";

function App() {
	const [items, setItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const fetchItems = async () => {
			setIsLoading(true);
			const result = await axios(
				`https://cors-anywhere.herokuapp.com/https://thronesapi.com/api/v2/Characters`
			).catch((err) => console.log(err));

			setItems(result.data);
			setSelectedItems(result.data);
			setIsLoading(false);
		};

		fetchItems();
	}, []);

	useEffect(() => {
		setSelectedItems(getQuery());
	}, [query]);

	const onChange = (q) => {
		setQuery(q);
	};

	const getQuery = () => {
		return items.filter((item) =>
			item.fullName.toLowerCase().includes(query.toLowerCase())
		);
	};

	return (
		<div className="container">
			<div className="header">
				<div className="header-image">
					<img src={headerTitle}></img>
				</div>
				<input
					type="text"
					placeholder="Search Characters..."
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>

			<CharacterGrid isLoading={isLoading} items={selectedItems} />
		</div>
	);
}

export default App;
