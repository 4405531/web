import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import style from './style'
import SearchButton from './SearchButton';

export default class Search extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value:'',
	  	page:1,
	  	order:'h'
	  };
	}

	render(){
		return(
			<div class={ style.searchBlock }>
				<div class={ style.about }>
					<a href='javascript:void(0)'>关于</a>
				</div>
				<img src='./assets/logo.png' class={ style.btlikeLogo }/>
				<div class={ style.searchBoxContainer }>
					<input type="text" 
						   onkeydown = { this.key } 
						   oninput = { this.inputChangeHandler }
						   class={ style.searchBox }
						   placeholder = "Search here"
						   spellheck = { false }
						   autocomplete = "off"
						   title = 'Search'
						   autofocus
						   />
				    <div class={ style.searchButton }></div>
				</div>
				<div class={ style.confirmSearchButton }>
					<SearchButton
					onclick = { this.searchHander }
					>搜索</SearchButton>
				</div>
			</div>
		)
	}

	key = ( e ) => {

		if( e.keyCode == 13 ){
			this.searchHander();
		}
	}

	inputChangeHandler = ( e ) => {
		this.setState({
			value:e.srcElement.value
		})
	}

	searchHander = () => {
		var routeString = '/search-result?name=' + this.state.value + 
						  '&page='+ this.state.page +
						  '&order=' + this.state.order;

		route( routeString ,false)
	}
}