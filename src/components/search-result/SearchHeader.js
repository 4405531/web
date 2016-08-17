import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

export default class SearchHeader extends Component{
	render(){
		return(
			<div>
				<input type='text'/>
			</div>
		)
	}
}