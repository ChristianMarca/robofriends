import React,{Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


// const App=()=>{
// 	return (
// 		<div className='tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox />
// 			<CardList robots={robots}/>
// 		</div>

// 		);
// }
// export default App;

// Para usar estados debemos regresar a las class

class App extends Component{
	//Contructores Avanzados hayq eu revisar de nuevo
	constructor(){
		super();
		//state son las cosas que pueden cambiar en el App
		this.state={
		// robots: robots,
		robots:[],
		searchField: ''
		}
	}
	//Componentes de react
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>{this.setState({robots:users})});
	}

	//Creamos una funciona para realizar las lalmadas pued llamarse como nos convenga
	onSearchChange=(event)=>{
		this.setState({searchField: event.target.value})
	}
	render(){
		const {robots,searchField}=this.state;
		const filteredRobots=robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length? <h1>Loading</h1> : (
			<div className='tc'>
				<h1 className='f1'>Probando Cambio</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>

			);
		// if(!robots.length){
		// 	return <h1>Loading</h1>
		// }
		// return (
		// 	<div className='tc'>
		// 		<h1 className='f1'>RoboFriends</h1>
		// 		<SearchBox searchChange={this.onSearchChange}/>
		// 		<Scroll>
		// 			<CardList robots={filteredRobots}/>
		// 		</Scroll>
		// 	</div>

		// 	);
	}
}
export default App;