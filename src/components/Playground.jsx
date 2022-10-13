import React from "react";
import styled from "styled-components";
import { containerLayouts } from "./common/styles";
import GameArea from "./GameArea";

const Container = styled.div`
	height: calc(100vh -80px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

const PlayerCard = styled.div`
	height: 80%;
	width: 30%;
	${containerLayouts};
`;

const Playground = () => {
	return (
		<Container>
			<PlayerCard></PlayerCard>
			<GameArea></GameArea>
		</Container>
	);
};

export default Playground;
