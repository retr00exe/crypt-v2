import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import Caesar from './Caesar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cipher = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	return (
		<CipherContainer>
			<div className="body">
				<div className="app">
					<div className="input">
						<h3>Input</h3>
						<hr />
						<textarea
							rows={10}
							spellCheck="false"
							placeholder="The quick brown fox jumps over the lazy dog."
							// onChange={handleTextInput}
						/>
					</div>
					<div className="select">
						<h3>Select Hash</h3>
						<hr />
						<h3 className="select-cipher" onClick={() => toggle()}>
							Caesar <IoMdArrowDropdown />
						</h3>
						<Modal isOpen={modal} toggle={toggle}>
							<ModalHeader toggle={toggle}>Library</ModalHeader>
							<ModalBody>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</ModalBody>
						</Modal>
						<Caesar />
					</div>
					<div className="output">
						<h3>Output</h3>
						<hr />
						<textarea rows={10} />
					</div>
				</div>
			</div>
		</CipherContainer>
	);
};

const CipherContainer = styled.div`
	.body {
		background-color: #f2f4f6;
		height: 100vh;
	}

	h3 {
		font-family: Roboto;
		font-size: 1.25rem;
	}

	.margin-down {
		margin-bottom: 20px;
	}

	.select-cipher {
		cursor: pointer;
		color: #ff9900;
		font-size: 1.4rem;
	}

	.app {
		display: flex;
		justify-content: space-between;
		padding: 40px 100px;
		font-family: 'Zilla Slab', serif;
		font-size: 20px;
	}

	.app > div {
		padding: 1em;
		text-align: center;
		border: 2px #eee solid;
		box-shadow: 3px 3px 2px #eee;
	}

	.app > div:nth-child(odd) {
		background: #fff;
		flex: 1;
		margin: 0 30px;
	}

	.app > div:nth-child(even) {
		background: #fff;
		flex: 1;
	}

	.input-area {
		border-width: 0px;
		border: none;
	}

	textarea {
		width: 100%;
		resize: none !important;
		border: none;
		overflow: auto;
	}

	textarea:focus {
		outline: none;
		resize: none;
	}

	hr {
		margin: 30px -20px 20px;
	}

	.desc {
		font-size: 16px;
		text-align: left;
		line-height: 0.5;
		font-weight: 400;
	}

	.title {
		color: #ff9900;
		text-align: left;
		padding: 10px 0;
	}
`;

export default Cipher;
