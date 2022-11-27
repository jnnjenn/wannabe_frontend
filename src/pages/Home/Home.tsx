import { useCallback, useEffect, useState } from "react";

// Import components
import { GridCharacter } from "../../components/GridCharacter";

// Import Stores
//import CharacterStore from "../../stores/charactersStore";
import { TCharacter } from "../../../@types/Character";
import Top from "../../components/Top";
import NavBar from "../../components/NavBar";
import BackgroundCharacter from "../../components/BackgroundCharacter";

// Import styles


const Home = () => {
	const [loading, setLoading] = useState(false);
	//const { charactersData, getCharactersData } = CharacterStore;

	useEffect(() => {
    setLoading(true);
    //getCharactersData('', '1');
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

	/*const renderDirectories = useCallback((): JSX.Element[] => {
    const characterList = charactersData.results.map((character:TCharacter, indexCharacter) => {
			console.log('Home.tsx - 27  >>>>>>>>> character: ', character);
			return <GridCharacter key={indexCharacter} {...character} />
		});
		return characterList;
  }, [charactersData.results]);*/

	return(
		<div className='-z-30 back-light transition-all overflow-x-hidden'>
      <Top/>
      <NavBar/>
			<BackgroundCharacter/>
			<div className="w-[100vw] lg:h-[100vh] bg-gray-50"></div>
			
		</div>
	)

}

export default Home;