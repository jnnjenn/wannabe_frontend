// Import components
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { to } from 'await-to-js';

// Import store
import { changeResults } from '../../app/charactersReducer';

// Import Components
import Top from "../../components/Top";
import NavBar from "../../components/NavBar";
import BackgroundCharacter from "../../components/BackgroundCharacter";
import Searcher from "../../components/SearchBar";
import GridCharacter from "../../components/GridCharacter";
import Pagination from "../../components/Pagination";
import { getCharacters } from '../../services/http';

// Import styles

const Home = () => {
	// * State Store
	const { characters } = useSelector((state: any) => state);
  const dispatch = useDispatch(); 

	const getDataCharacters = async () => {
		const [error, responseData] = await to<any>(getCharacters(characters.searchWord, '1'));
		if (error) {
			return;
		}
		dispatch(changeResults(responseData));
	}

	useEffect(() => {
		getDataCharacters();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return(
		<div className='-z-30 back-light transition-all overflow-x-hidden'>
      <Top/>
      <NavBar/>
			<BackgroundCharacter title='>> Character' />
			<div className="w-[100vw] bg-gray-50 p-8 flex justify-center align-center">
				<div className="w-4/5 p-8 border-t-4 border-yellow-300 bg-white rounded-lg shadow-md">
					<Searcher/>
					<GridCharacter/>
					<Pagination/>
				</div>		
			</div>			
		</div>
	)
}

export default Home;
