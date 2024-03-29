import backgroundfirst from '../assets/photo-1.jpeg'

import { motion } from 'framer-motion'

const Page1 = () => {
	return (
		<div className='w-full h-[250vh] relative overflow-hidden bg-zinc-900'>
			<img
				data-scroll
				data-scroll-speed='-1.5'
				className='w-full h-full object-cover opacity-[75%]'
				src={backgroundfirst}
				alt=''
			/>
			<div className='container h-full w-[80%] absolute top-[17%] left-0 ml-24 text-white font-[TWK Lausanne-300]'>
				<div className='left w-1/2'>
					{['Air', 'Ambience', 'Experience'].map((i, index) => {
						return (
							<div className='masker ' key={index}>
								<motion.h1
									viewport={{ once: true }}
									initial={{ y: '120', rotateZ: '8deg', opacity: 0 }}
									whileInView={{ y: 0, rotateZ: '0deg', opacity: 1 }}
									transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.9 }}
									className='text-[10vw] leading-none tracking-tighter font-regular origin-top-left'
								>
									{i}
								</motion.h1>
							</div>
						)
					})}

					{/* <h1 className="text-[10vw] leading-none tracking-tighter font-regular">
            Digital
          </h1>
          <h1 className="text-[10vw] leading-none tracking-tighter font-regular">
            Presence
          </h1> */}
					<p className='opacity-85 tracking-tighter ml-[.8vw] mt-[2vw]'>
						Intrigued by aura, fascinated by essence and fuelled with an everlasting devotion
					</p>
				</div>
				<div className='right w-1/2 h-[25vw]  px-9 py-5 absolute bottom-[28vw] -right-[7vw] '>
					<h3 className='font-semibold text-[1.5vw] leading-[2.2vw]'>
						We explore and push the boundaries of custom atmosphere as THE brand and businesses that strive to enhance
						peoples lives through exceptional experiences.
					</h3>
					<p className='font-regular text-[1.1vw] mt-5 mb-[3vw]'>
						lorem ipsum dolor sit amet, consectetur <br />
						adipiscing elit. Sed do eiusmod tempor incididunt ut labore et aesthetics, meticulously crafted details, and
						surprising <br />
						interactions to create digital experiences that spark <br />
						conversation, inspire action, and drive desirability.
					</p>
					<a className='underline underline-offset-3 ' href='#'>
						<li>Our Story</li>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Page1
