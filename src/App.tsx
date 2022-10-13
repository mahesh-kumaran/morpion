import React from "react";
import styled from "styled-components";
import "./App.css";
import AppHeader from "./components/Header";
import Playground from "./components/Playground";

const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #fbda61;
	background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<AppContainer>
			<AppHeader></AppHeader>
			<Playground></Playground>
		</AppContainer>
	);
}

export default App;
