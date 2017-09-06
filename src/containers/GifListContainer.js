import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			gifs: [],
			
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(search) {
		fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC')
		.then(res => res.json()).then(gifs => this.setState({
			gifs: gifs
		}))
  	}
  
	render() {
		if (this.state.gifs.length != []) {
			return (
				<GifList gifs={this.state.gifs}/>
			)	
		} else {
			return <GifSearch startSearch={this.handleClick}/>
		}

	}

}

export default GifListContainer