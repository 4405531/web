import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import style from './style';

export default class Item extends Component{
	render(){
		return (
			<div>
				{
					this.getResult()
				}
			</div>
		)
	}

	getResult = () => {

		const { torrent } = this.props;

		return (
			<div class={ style.itemWrapper }>
				<div class={ style.itemName }>
					{torrent.Name}
				</div>
				<div class={ style.infos }>
					{torrent.CreateTime}
					{torrent.Heat}
				</div>
				<div class={ style.other }>
					{torrent.Infohash}
					{torrent.FileCount}
				</div>
			</div>
		)
	}
}