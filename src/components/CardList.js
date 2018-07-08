import React from 'react';
import Card from './Card';

// const CardList=({robots})=>{
// 	const cardArray=robots.map((user,index)=>{
// 		// Va a adar error por que se requiere una clave "Key" para la lista
// 		// return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
// 		//para array loop
// 		return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
// 	})

// 	return(
// 		<div>
// 			{cardArray}
// 		</div>
// 		);
// }
const CardList=({robots})=>{
	return(
		<div>{
			robots.map((user,index)=>{
			    return(
				    <Card
					    key={index}
					    id={robots[index].id}
					    name={robots[index].name}
					    email={robots[index].email}
			    	/>
					);})
			}
		</div>
		);
}

export default CardList;