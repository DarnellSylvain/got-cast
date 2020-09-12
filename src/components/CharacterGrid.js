import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
	return (
		<div className="cards">
			{isLoading
				? "Data is Loading"
				: items.map((item) => (
						<CharacterItem key={item.id} item={item}></CharacterItem>
				  ))}
		</div>
	);
};

export default CharacterGrid;
