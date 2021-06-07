import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import HeaderHome from './HeaderHome';
import SidebarHome from './SidebarHome';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
	 <HeaderHome />
	</BrowserRouter>, document.getElementById('root')
	);

// ReactDOM.render(<SidebarHome />, document.getElementById('root2'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
