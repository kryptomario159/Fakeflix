import "./credits.scss"
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";
import { GITHUB_AVATAR_URL, GITHUB_BASE_URL } from "../../requests";

const Credits = () => {
	return (
		
		<motion.footer
			variants={creditsFadeInUpVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='Credits'
		>
			
			
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/fYfxB08/dYlwf7wg.png" alt='Credits Avatar' />
			</motion.a>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/bgJ14qW/DN7L6lpQ.png" alt='Credits Avatar' />
			</motion.a>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/0ngk2hN/xNJB8hkg.png" alt='Credits Avatar' />
			</motion.a>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/V9q4MmK/TNm4OYSQ.png" alt='Credits Avatar' />
			</motion.a>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/5LnWk3s/DEwN6qXQ.png" alt='Credits Avatar' />
			</motion.a>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				
				
				<img className='Credits2__avatar' src="https://i.ibb.co/cbgwqZm/metazooie-fondo.png" alt='Credits Avatar' />
			</motion.a>
		
			<span>Developed by</span>
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				<span>Metazooie</span>
				
				<img className='Credits__avatar' src={GITHUB_AVATAR_URL} alt='Credits Avatar' />
			</motion.a>
		</motion.footer>
	)
}

export default Credits;
