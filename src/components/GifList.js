import React from 'react';

const GifList = (props) => {
	return (
		<div>
			<ul>
			{props.gifs.data.map((gif, index) => {
				return <li key={index}><iframe src={gif.embed_url} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></li>
			})}
			</ul>
		</div>
	)
}

export default GifList