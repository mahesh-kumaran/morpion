import * as React from "react";
import AppLogo from "../assets/images/AppLogo.png";
import styled from "styled-components";

const NavBar = styled.div`
	height: 80px;
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;
`;

const ImageWrapper = styled.img`
	height: 100%;
`;

const AppHeader = () => {
	return (
		<NavBar>
			<ImageWrapper src={AppLogo} alt={"broken-logo"}></ImageWrapper>
			<h3>Morpion</h3>
		</NavBar>
	);
};

export default AppHeader;
