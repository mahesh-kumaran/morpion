import React from "react";
import styled from "styled-components";
import { containerLayouts } from "./common/styles";
import { GameAreaProps } from "./common/types";

const Container = styled.div`
	${containerLayouts};
	height: 80%;
	width: 50%;
	display: flex;
	justify-content: center;
`;

const Board = styled.div`
	padding: 1em;
	background: grey;
	display: grid;
	grid-template-columns: repeat(3, 150px);
`;

const Cell = styled.div`
	min-width: 150px;
	min-height: 150px;
	background: white;
	border: solid 1px black;
	place-items: center;
`;

const GameArea = (props: GameAreaProps) => {
	return (
		<Container>
			<Board>
				{new Array(9).fill(9).map(() => {
					return <Cell></Cell>;
				})}
			</Board>
		</Container>
	);
};

export default GameArea;
