// Import components
import { useSelector } from 'react-redux'
import { RowCharacter } from './RowCharacter';

const GridCharacter = () => {
	const {characters} = useSelector((state: any) => state);
	const renderCharacter = () => {
		const characterList = [...characters.results];
    return characterList.map((item: any, indexItem: number) => {
      return (
				<RowCharacter key={indexItem} {...item} />
      )
    })
	}

	return(
		<div className="overflow-x-auto relative py-8">
			<table className="w-full text-sm text-left">
				<thead className="text-xs uppercase bg-gray-50 dark:bg-gray-100 dark:text-sky-600">
					<tr>
						<th scope="col" className="py-3 px-6">
							Genre
						</th>
						<th scope="col" className="py-3 px-6">
							Character Name
						</th>
						<th scope="col" className="py-3 px-6">
							Details
						</th>
					</tr>
				</thead>
				<tbody>
					{ renderCharacter() }
				</tbody>
			</table>
		</div>
	);
}

export default GridCharacter;