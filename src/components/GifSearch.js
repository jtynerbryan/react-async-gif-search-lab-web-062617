import React from 'react'

class GifSearch extends React.Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault()
		this.props.startSearch(this.state.input)
	}

	render() {
		return (
			<div>
				<h1>Search Gifs</h1>
				<form onSubmit={(event) => this.handleClick(event)}>
				  <label>
				    Search Gifs:
				    <input type="text" name="name" onChange={(event) => this.setState({
				    	input: event.target.value
				    })}/>
				  </label>
				  <input type="submit" value="Submit" />
				</form>				
			</div>
		)
	}
}

export default GifSearch