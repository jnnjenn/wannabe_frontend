// Import Libraries
import to from 'await-to-js';
import { useSelector, useDispatch } from 'react-redux'

// Import Store
import { changeResults } from '../app/characterReducer';

// Import Services
import { getCharacters } from '../services/http';

// Import Components
import NumberPagination from './NumberPagination';

const Pagination = () => {
	// State store
	const { characters } = useSelector((state: any) => state);
  const dispatch = useDispatch(); 

	const renderPrevious = () => {
    if( characters.actualPage > 1 ) {
      return (
				<li className="page-item">
					<button onClick={ () => actionBtnPrevNext(characters.actualPage - 1) } className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</button>
				</li>
      )
		}
		return;
	}

	const renderPagination = () => {
    return Array.from({length: characters.totalPage}, (_, i) => {
      return (
				<NumberPagination key={`indexItem${i}`} nextNum={i+1} actualPage={characters.actualPage} />
      )
    })
	}

	const renderNext = () => {
    if( characters.actualPage < characters.totalPage ) {
      return (
				<li className="page-item">
					<button onClick={ () => actionBtnPrevNext(characters.actualPage + 1) } className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</button>
				</li>
      )
		}
		return;
	}

	const actionBtnPrevNext = async (nextNum:number) => {
		const [error, responseData] = await to<any>(getCharacters(characters.searchWord, nextNum.toString()));
		if (error) {
			return;
		}
		dispatch(changeResults(responseData));
	}
	
	return(
		<div className="flex justify-center">
			<nav aria-label="Page navigation example">
				<ul className="flex list-style-none">
					{ renderPrevious() }
					{ renderPagination() }					
					{ renderNext() }
				</ul>
			</nav>
		</div>
	)
}

export default Pagination;
