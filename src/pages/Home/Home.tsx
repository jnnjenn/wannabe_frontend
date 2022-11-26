import { useEffect, useState } from "react";
import { } from "react-bootstrap";
import { GridCharacter } from "../../components/GridCharacters/GridCharacter";

import CharacterStore from "../../stores/charactersStore";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const { charactersData, getCharactersData } = CharacterStore;

	useEffect(() => {
    setLoading(true);
    getCharactersData();
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

	return(
		<>
			<GridCharacter results={charactersData.results} ></GridCharacter>
		</>
	)

}

export default Home;