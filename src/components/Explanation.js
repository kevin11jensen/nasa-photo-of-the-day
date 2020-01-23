import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';





const ExpDiv = styled.h3`
	background-color: #f5f3ce;
    font-size: 1.6rem;
`;

function Explain() {
	const [ exp, setExp ] = useState([]);
	useEffect(
		() => {
			axios
				.get('https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY')
				.then((response) => {
					console.log(response.data);
          			setExp(response.data);
				})
				.catch((error) => {
					console.log('the data was not returned', error);
				})
		}, []);
		console.log(setExp);
  return (
    <ExpDiv>
		<h3>{exp.explanation}</h3> 
    </ExpDiv>
 )
}

export default Explain;