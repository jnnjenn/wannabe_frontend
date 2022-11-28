// Import Libraries
import to from 'await-to-js';
import { useSelector, useDispatch } from 'react-redux'

// Import Services
import { getCharacters } from '../services/http';

// Import Store
import { changeResults } from '../app/charactersReducer';

const NumberPagination = (props:any) : JSX.Element => {
	// * State store
	const { characters } = useSelector((state: any) => state);
  const dispatch = useDispatch(); 

	const styleBtn = props.actualPage === props.nextNum ? 'bg-gray-200' : 'bg-transparent';

	const actionBtnGoTo = async (nextNum:number) => {
		const [error, responseData] = await to<any>(getCharacters(characters.searchWord , nextNum.toString()));
		if (error) {
			return;
		}
		dispatch(changeResults(responseData));
	}

	return (
		<li className="page-item">
			<button onClick={ ()=> actionBtnGoTo(props.nextNum)} className={ `${styleBtn} page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}>
				{ props.nextNum }
			</button>
		</li>
	)
}

export default NumberPagination