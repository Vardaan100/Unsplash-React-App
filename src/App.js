import React, { Component } from 'react'
import axios from 'axios'

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
import Navbar from './Components/Navbar/navbar'

//storing the client id from .env file
const clientID = `client_id=${process.env.REACT_APP_ACCESS_KEY}`;

//making a constructor 
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}
	//runs after the DOM is initialized in the tree
	componentDidMount() {
		this.showResults();	
	}
	//fetchs photos from Unsplash API
	showResults = () => {
		fetch(`https://api.unsplash.com/photos/?page=1&per_page=24&${clientID}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ imgs: data ,loadingState: false});
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
		
	};

	//triggered when the search button is clicked
	performSearch = (query = '') => {
		axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=24&query=${query}&${clientID}`)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};


	//rendering the JSX 
	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<Navbar />
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>	
				<div className="main-content">
				
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}

	