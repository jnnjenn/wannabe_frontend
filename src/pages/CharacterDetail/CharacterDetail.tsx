
// Import Libraries
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import to from 'await-to-js';

// Import Services
import { getCharacterDetails } from '../../services/http';

// Import Store
import { changeDetails } from '../../app/characterDetailReducer'

// Import Components
import BackgroundCharacter from '../../components/BackgroundCharacter';
import NavBar from '../../components/NavBar';
import Top from '../../components/Top';
import { useEffect } from 'react';
import RowDetail from '../../components/RowDetail';

const CharacterDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams()

	// * State Store
	const { characterDetails } = useSelector((state: any) => state);
  const dispatch = useDispatch();

	const actionBtnHome = () => {
    navigate('/');
  }

	const getCharacterDetail = async () => {
		const [error, responseData] = await to<any>(getCharacterDetails(id));
		if (error) {
			return;
		}
		dispatch(changeDetails(responseData));
	}

	useEffect(() => {
		getCharacterDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<div className='-z-30 back-light transition-all overflow-x-hidden'>
      <Top/>
      <NavBar/>
			<BackgroundCharacter title='>> Character Detail ' />
			<div className="w-[100vw] bg-gray-50 p-8 flex justify-center align-center">
				<div className="w-4/5 p-8 border-t-4 border-yellow-300 bg-white rounded-lg shadow-md">

						<div className="flex items-center justify-between mb-4">
							<h5 className="text-[30px] font-bold leading-none text-gray-800">{characterDetails.name}</h5>
							<button onClick={actionBtnHome} aria-label='Go Back' className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-blue-500 px-2 py-2 text-base font-medium text-white hover:bg-cyan-700">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
									</svg>
								</button>
						</div>
						<div className="flow-root">
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								{ 
									<>
										<RowDetail keyName='Birth Year:' value={characterDetails.birth_year} />
										<RowDetail keyName='Eye Color:' value={characterDetails.eye_color} />
										<RowDetail keyName='Gender:' value={characterDetails.gender} />
										<RowDetail keyName='Hair Color:' value={characterDetails.hair_color} />
										<RowDetail keyName='Height:' value={characterDetails.height} />
										<RowDetail keyName='Mass:' value={characterDetails.mass} />
										<RowDetail keyName='Skin Color:' value={characterDetails.skin_color} />
									</>								
								}
							</ul>
						</div>

				</div>		
			</div>			
		</div>
	)
}

export default CharacterDetail;
