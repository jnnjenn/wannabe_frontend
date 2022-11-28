import { enumKeys } from "../../@types/enumKeys";

const RowDetail = (props: any) => {
	return (
		<li className="py-3 sm:py-4">
			<div className="flex items-center space-x-4">
				<div className="flex flex-row min-w-0 ">
					<p className="text-sm font-medium text-gray-900 truncate">					
						{props.keyName}
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400 px-2">
						{props.value}
					</p>

				</div>
			</div>
		</li>
	)
}

export default RowDetail;