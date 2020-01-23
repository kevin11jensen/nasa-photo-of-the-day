import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import NasaCard from "./components/NasaCard";
import DateInfo from './components/DateInfo';
import TitleText from './components/Title';
import Exp from './components/Explanation';
import Explain from "./components/Explanation";


const Header = styled.h1`
  font-size: 3rem;
  color: white;
  background-color: darkBlue;
  padding: 1%;

  @media(max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Div = styled.div`
	background-color: #f5f3ce;

`;

//https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY
function App() {
  return (
    <Div className = "App">

    <Header>Nasa's Image of the Day</Header>

    

     <div className = 'card-container'>
      <DateInfo />
      <TitleText />
      <NasaCard />
      <Explain />
     </div>
    </Div>
  );
}

export default App;
