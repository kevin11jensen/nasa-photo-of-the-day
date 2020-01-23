import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

const Title = styled.h2`
	background-color: #f5f3ce;

`;

function TitleText() {
	const [ title, setTitle ] = useState([]);
	useEffect(
		() => {
			axios
				.get('https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY')
				.then((response) => {
					console.log(response.data);
          			setTitle(response.data);
				})
				.catch((error) => {
					console.log('the data was not returned', error);
				})
		}, []);
		console.log(setTitle);
  return (
    <Title>
		<h2>{title.title}</h2> 
    </Title>
 )
}

export default TitleText;