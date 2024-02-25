import { motion } from 'framer-motion'
// import LogoWhite from '../../public/LogoWhite.png'

const Navbar = () => {
	return (
		<div className='fixed top-0 w-screen px-10 py-10   flex justify-between items-center z-[999]'>
			<div className='logo '>{/* <img src={LogoWhite} alt='Logo' height={36} width={36} /> */}</div>
			<div className='links flex gap-7 text-white'>
				{['Work', 'Studio', 'News', 'Contact'].map((item, index) => {
					return (
						<motion.a
							initial={{ y: 100, opacity: 0, rotateZ: '8deg' }}
							whileInView={{ y: 0, opacity: 1, rotateZ: '0deg' }}
							transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
							className='text-[13px] font-medium origin-bottom-left'
							href='#'
							key={index}
						>
							{item}
						</motion.a>
					)
				})}
			</div>
		</div>
	)
}

export default Navbar
