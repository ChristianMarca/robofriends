import React from 'react';

//No va a ser una etiqueta de cierre automatico
//Childrens

const Scroll=(props)=>{
	return (
		<div style={{overflowY:'Scroll',border:'5px solid black',height:'400px'}}>
			{props.children}
		</div>
		);

}

export default Scroll;