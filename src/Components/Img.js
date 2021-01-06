import React from 'react';

const Img = props =>
	<li>
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<p>
			
			<a href={props.user}>{props.name}</a>
			<a>{props.desc}</a>
			<a>Likes: {props.likes}</a>
			<a href={props.link}> See on Unsplash</a>
		</p>
	</li>;

export default Img;
