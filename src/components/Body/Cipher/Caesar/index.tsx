import React from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Caesar = () => {
	return (
		<CaesarContainer>
			<div className="shift-wrapper">
				<p>Shift</p>
				<div className="shift">
					<Button>-</Button>
					<div className="position">
						<span>7</span>
						<span>
							a<IoIosArrowRoundForward />h
						</span>
					</div>
					<Button>+</Button>
				</div>
			</div>
		</CaesarContainer>
	);
};

const CaesarContainer = styled.div`
	font-family: Roboto;
	border-top: 1px solid #e3e8ec;
	border-bottom: 1px solid #e3e8ec;

	.shift-wrapper {
		margin: 0.4rem 0;
	}

	p {
		margin: 0;
		padding: 0;
		color: #93a3b1;
		font-size: 0.85rem;
		text-align: left;
		text-transform: uppercase;
	}

	.shift {
		font-size: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.position {
			span {
				margin: 0 0.5rem;
			}
		}
	}
`;

const Button = styled.button`
	background-color: white;
	border-color: white;
`;

export default Caesar;
