import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';



const Image = styled.img`
	width: 50%;
	
	@media(max-width: 576px) {
		width: 99%;
	}
`;

function NasaCard() {
	const [ pics, setPics ] = useState([]);
	useEffect(
		() => {
			axios
				.get('https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY')
				.then((response) => {
					console.log(response.data);
          			setPics(response.data);
				})
				.catch((error) => {
					console.log('the data was not returned', error);
				})
		}, []);
		console.log(setPics);
  return (
    <div className="images">
		<Image src = {pics.hdurl} alt = 'Nasa Image of the Day' />
    </div>
 )
}

export default NasaCard;
