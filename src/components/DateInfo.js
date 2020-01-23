import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

const Date = styled.h2`
	font-size: 2rem;
    background-color: #f5f3ce;

`;

function DateInfo() {
	const [ date, setDate ] = useState([]);
	useEffect(
		() => {
			axios
				.get('https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY')
				.then((response) => {
					console.log(response.data);
          			setDate(response.data);
				})
				.catch((error) => {
					console.log('the data was not returned', error);
				})
		}, []);
		console.log(setDate);
  return (
    <Date>
		<h2>{date.date}</h2> 
    </Date>
 )
}

export default DateInfo;