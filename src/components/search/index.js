import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import style from './style'

export default class Search extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value:''
	  };
	}

	render(){
		return(
			<div class={ style.search }>
				<span>这是搜索页面</span>
				<input type="text" onkeydown = { this.key } oninput = { this.inputChangeHandler }/>
			</div>
		)//
	}

	key = ( e ) => {

		if( e.keyCode == 13 ){
			var routeString = '/search-result?name=' + this.state.value
			route( routeString ,false)
		}
	}

	inputChangeHandler = ( e ) => {
		this.setState({
			value:e.srcElement.value
		})
	}
}