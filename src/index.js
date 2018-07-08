import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//Praa los que los padres pasen la informaicon a los hijos hacer multiple veces una accion
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
// No va le por que se usa cuando se exporta solo un elemento default
// import robots from './robots';
//Para multiples elemantos
//ejemplo
//import {robots,cats} from './robots';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Card />, document.getElementById('root'));
//Para hacer multiples tajrjetas
// ReactDOM.render(<div>
// 	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 	<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 	</div>
// 	, document.getElementById('root'));
ReactDOM.render(<App />
	, document.getElementById('root'));
registerServiceWorker();
