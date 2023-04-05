import React from 'react';
import Data from '../data/data';
import Pics from '../data/link.js';

import './card.css';

function Crd() {
	let i = 0;
	let output = Data[0].results.map(function (item) {
		i += 1;
		return (
			<div className='card' key={Math.random() * 10}>
				<div className='name'><span>{item.name}</span></div>
				<img src={Pics[length - 1 + i]} alt="#" />
				<div>Gender : {item.gender}</div>
				<div>Date of birth : {item.birth_year}</div>
				<div>Height : {item.height}</div>
				<div>Mass : {item.mass}</div>
				<div>Hair Color : {item.hair_color}</div>
				<div>Skin Color : {item.skin_color}</div>
				<div>Eye color : {item.eye_color}</div>
				<div>URL: <a href={item.url} target='blank'>{item.url}</a></div>
			</div>
		)
	});

	return (
		<>
			{output}
		</>
	)
}

export default Crd;