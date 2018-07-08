import React from 'react';

// const Card=(props)=> {
// 	return(
// 		//Por que estamos usando import 'tachyons'; por eos podemos usar estas propiedades #revisarTACHYONS
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
// 			<div>
// 			<h2>{props.name}</h2>
// 			<p>{props.email}</p>
// 			</div>
// 		</div>
// 		);
// }
//Con destructor
const Card=({name,email,id})=> {
	// const {name,email,id}=props
	//otra opcion
	return(
		//Por que estamos usando import 'tachyons'; por eos podemos usar estas propiedades #revisarTACHYONS
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;