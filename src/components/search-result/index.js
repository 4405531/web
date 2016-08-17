import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import Search from '../search';

import Item from './Item';

export default class SearchResult extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	amount:0,
	  	torrents:[]
	  };
	}

	componentDidMount(){
		const {
			name,
			page,
			order
		} = this.props;

		fetch(`http://api.btlike.com/list?keyword=${name}&page=${page}&order=${order}`).then((response) => {
		  return response.json();
		}).then((response) => {
		  
		  console.log('response ->', response)
		  this.setState({
		  	torrents:response.Torrent,
		  	amount:response.Count
		  })
		});
	}

	render(){
		return(
			<div>
				<div>共{ this.state.amount }个结果</div>
				{
					this.state.torrents.map(( torrent ) => {
						return (
							<Item torrent = { torrent }/>
						)
					})
				}
			</div>
		)
	}
}