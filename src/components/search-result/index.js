import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import Search from '../search';

export default class SearchResult extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentDidMount(){
		const { name } = this.props;

		console.log( name );
	}

	render(){
		return(
			<div>
				<div>这是搜索结果页面</div>
				{ this.props.name }
			</div>
		)
	}
}