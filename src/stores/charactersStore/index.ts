import to from 'await-to-js';
import { observable, action } from 'mobx';

// * Types
import { TCharacters } from '../../../@types/Character';  

// * Services
import { getCharacters } from '../../services/http';

class CharacterStore {
	@observable charactersData : TCharacters = {
		count: 0,
		next: '',
		previous: '',
		results : []
	}

	@action getCharactersData = async (search='', page='1') => {
		// Load data
		const [error, responseData] = await to<IObj>(getCharacters(search, page));
		if (error) {
			return;
		}

		this.charactersData.count = responseData.count;
		this.charactersData.next = responseData.next;
		this.charactersData.previous = responseData.previous;
		this.charactersData.results = responseData.results;

	}
}

export default new CharacterStore();