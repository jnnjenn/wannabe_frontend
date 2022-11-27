const BackgroundCharacter = () => {
  return (
    <div className="relative lg:h-[300px] lg:text-[30px] mobile:text-[28px] mobile:h-[250px] w-[100vw] overflow-hidden shadow-md bg-repeat bg-cover bg-banner-image overflow-y-hidden">
			<div className="absolute h-full overflow-hidden">
				<div className="flex justify-start items-end h-full  code-highlight bg-code-highlight">
					<div className="px-12 py-10 text-2xl code-highlight bg-code-highlight">
						<h1 className="text-white font-bold"> {'>> CHARACTERS'}</h1>
					</div>
				</div>
			</div>
		</div>
  )
};

export default BackgroundCharacter;
