
import { useParams } from 'react-router-dom';
import BackgroundCharacter from '../../components/BackgroundCharacter';
import NavBar from '../../components/NavBar';
import Top from '../../components/Top';

const CharacterDetail = () => {
	const { id } = useParams()

	console.log('CharacterDetail.tsx - 5  >>>>>>>>> id: ', id);



	return (
		<div className='-z-30 back-light transition-all overflow-x-hidden'>
      <Top/>
      <NavBar/>
			<BackgroundCharacter title='>> Character Detail ' />
			<div className="w-[100vw] bg-gray-50 p-8 flex justify-center align-center">
				<div className="w-4/5 p-8 border-t-4 border-yellow-300 bg-white rounded-lg">
					
				</div>		
			</div>			
		</div>
	)
}

export default CharacterDetail;
