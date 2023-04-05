import React from "react";
import ReactDOM from "react-dom";
import curs from './curs';
import './style.css';

function App() {
	let result = curs.map(function (item) {
		return (
			<tr key={item.id}>
				<td>{item.cc},  {item.txt}</td>
				<td>{item.rate}</td>
			</tr>
		)
	});
	return (
		<>
			<thead>
				<tr>
					<th>Назва валюти</th>
					<th>Ціна(грн)</th>
				</tr>
			</thead>
			<tbody>
				{result}
			</tbody>
		</>
	)
}
ReactDOM.render(<App />, document.querySelector('.tbl'));



