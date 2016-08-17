import { h, Component } from 'preact';
import searchButtonStyle from './searchButtonStyle'

export default class SearchButton extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	normal:searchButtonStyle.SearchButtonWrapper,
	  	hover:searchButtonStyle.SearchButtonWrapperHover,
	  	press:searchButtonStyle.SearchButtonWrapperPress,
	  };
	}

	componentWillMount(){
		this.setState({
			current:this.state.normal
		})
	}

	render(){
		return (
			<div 
				class={ this.state.current }
				onmouseenter = { this.mouseHandler.bind(this, { type:'enter' }) }
				onmouseleave = { this.mouseHandler.bind(this, { type:'leave' }) }
				onmousedown = { this.mouseHandler.bind(this, { type:'down' }) }
				onmouseup = { this.mouseHandler.bind(this, { type:'up' }) }
				onclick = { this.clickHandler }
				>
				<span>{ this.props.children }</span>
			</div>
		)
	}

	mouseHandler( e,{ type } ){
		const { normal, hover, press } = this.state;

		if( /enter/.test( type ) ){
			this.setState({
				current:hover
			})
			return;
		}

		if( /down/.test( type ) ){
			this.setState({
				current:press
			})
			return;
		}

		if( /leave/.test( type ) ){
			this.setState({
				current:normal
			})
			return;
		}

		if( /up/.test( type ) ){
			this.setState({
				current:hover
			})
			return;
		}
	}

	clickHandler = () => {
		this.props.onclick && this.props.onclick()
	}
}
