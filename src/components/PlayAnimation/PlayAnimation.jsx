import "./playAnimation.scss"
import { useEffect, useRef } from "react";
/* import { useHistory } from "react-router-dom"; */
import { TADUM_SOUND_URL } from "../../requests";

const PlayAnimation = () => {

	/* let history = useHistory(); */
	const soundRef = useRef(null);
	const handleTadum = () => {
		soundRef.current.currentTime = 0;
		soundRef.current.play();
	}

	useEffect(() => {
		handleTadum();
		setTimeout(() => {
			window.location.href = "https://kazooie.io/project/earth?proj=cyYCBl"
		}, 4200)
	}, [])

	return (
		<div className='PlayAnimation__wrp'>
			<audio ref={soundRef} src={TADUM_SOUND_URL} />
			<span className="PlayAnimation__text">
				Metazooie
			</span>
		</div>
	)
}

export default PlayAnimation
