const Page7 = () => {
	return (
		<div
			//   data-scroll
			//   data-scroll-speed="-5"
			data-scroll
			data-scroll-speed='-.3'
			style={{ zIndex: 0 }}
			className=' h-[115vh] w-full bg-zinc-950 text-[#E0CCBB]'
		>
			<div className='content h-full px-[8vw] pt-10 '>
				<div className='left  w-[29vw]'>
					<h1 className=' text-[10vw] tracking-tight leading-[10vw]'>Our Story</h1>
					<p className='text-[2vw] mt-[3vw] tracking-tighter leading-8 '>
						The story behind Louvair is one of exploration, creativity and curiosity.
					</p>
				</div>
				<div className='divider w-full h-[1.5px] opacity-85 bg-[#E0CCBB] my-10'></div>
				<div className='links flex gap-[15vw] items-center'>
					<div className='about'>
						{['Jurshur', '6041 HS, Roermond', 'Houston, TX', 'louvair.com'].map((i, index) => {
							return (
								<p className='text-[1.2vw] leading-[2.5vw]  ' key={index}>
									{i}
								</p>
							)
						})}
					</div>
					<div className='pages'>
						{['Work', 'Studio', 'News', 'Contact'].map((i, index) => {
							return (
								<p className='text-[1.2vw] leading-[2.5vw]  ' key={index}>
									{i}
								</p>
							)
						})}
					</div>
					<div className='sites'>
						{['Behance', 'Dribbble', 'Twitter', 'Instagram'].map((i, index) => {
							return (
								<p className='text-[1.2vw] leading-[2.5vw]  ' key={index}>
									{i}
								</p>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page7
