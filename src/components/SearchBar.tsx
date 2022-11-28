// Import libraries
import to from 'await-to-js';
import { KeyboardEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeResults, changeSearchWord } from '../app/charactersReducer';
import { getCharacters } from '../services/http';

const Searcher = () => {
	// * State store
	const dispatch = useDispatch(); 
	const { characters } = useSelector((state: any) => state);

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		const searchWord: string = e.currentTarget.value;
		const keyEnter = e.code;
		console.log('SearchBar.tsx - 16  >>>>>>>>> keyEnter: ', keyEnter);
		if(keyEnter === 'Enter' || keyEnter === 'NumpadEnter'  || keyEnter === 'NumpadEnter' || keyEnter === '13'){
			dispatch(changeSearchWord(searchWord));
		}		
	};
  
	const getDataCharacters = async () => {
		const [error, responseData] = await to<any>(getCharacters(characters.searchWord, '1'));
		if (error) {
			return;
		}
		dispatch(changeResults(responseData));
	}

	useEffect(() => {
		getDataCharacters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [characters.searchWord])
	
	
	return (
		<div className="lg:w-96">
			<label className="relative block">
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-sky-600">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</span>
				<input onKeyUp={handleKeyPress} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type and press Enter to search..." type="text" name="search" />
			</label>
		</div>
	)
};

export default Searcher;