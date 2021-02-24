import React, { Component } from 'react';
import {
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import crypto from 'crypto';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State {
	dropdownOpen: boolean;
	cryptName: string;
	hashAlgorithm: string;
	encodingAlgorithm: string;
	isSelected: boolean;
	isHash: boolean;
	textValue: string;
	hashValue: string;
	hashList: string[];
}

export default class Hash extends Component<{}, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			dropdownOpen: false,
			cryptName: 'MD-5', //initial state
			hashAlgorithm: 'md5', //initial state
			encodingAlgorithm: '',
			isSelected: false,
			isHash: true,
			textValue: '',
			hashValue: '',
			hashList: ['MD-5', 'SHA-1', 'SHA-224', 'SHA-256', 'SHA-384', 'SHA-512'],
		};
		this.toogleDropdown = this.toogleDropdown.bind(this);
		this.encrypt = this.encrypt.bind(this);
		this.setHashAlgorithm = this.setHashAlgorithm.bind(this);
		this.handleTextInput = this.handleTextInput.bind(this);
	}

	toogleDropdown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	}

	encrypt() {
		const hash = crypto.createHash(this.state.hashAlgorithm);
		hash.on('readable', () => {
			const data = hash.read();
			if (data) {
				this.setState({
					hashValue: data.toString('hex'),
				});
			}
		});
		console.log(this.state.textValue);
		hash.write(this.state.textValue);
		hash.end();
	}

	setHashAlgorithm(e: any) {
		this.setState(
			{
				cryptName: e.target.value,
				hashAlgorithm: e.target.id,
			},
			() => this.encrypt()
		);
	}

	handleTextInput(e: any) {
		this.setState(
			{
				textValue: e.target.value,
			},
			() => this.encrypt()
		);
	}

	render() {
		return (
			<HashContainer>
				<div className="body">
					<div className="app">
						<div className="input">
							<h3>Input</h3>
							<hr />
							<textarea
								rows={10}
								spellCheck="false"
								placeholder="The quick brown fox jumps over the lazy dog."
								onChange={this.handleTextInput}
							/>
						</div>
						<div className="select">
							<h3>Select Hash</h3>
							<hr />
							<ButtonDropdown
								className="margin-down"
								isOpen={this.state.dropdownOpen}
								toggle={this.toogleDropdown}
							>
								<DropdownToggle caret>{this.state.cryptName}</DropdownToggle>
								<DropdownMenu>
									{this.state.hashList.map((name: string) => {
										return (
											<DropdownItem
												value={name}
												id={name.toLowerCase().replace('-', '')}
												onClick={this.setHashAlgorithm}
											>
												{name}
											</DropdownItem>
										);
									})}
								</DropdownMenu>
							</ButtonDropdown>
							<h3 className="title">
								<b>Description</b>
							</h3>
							<p className="desc">Name : MD-5</p>
							<p className="desc">Digest sizes : 128-bit</p>
							<p className="desc">Block sizes: 512 bit</p>
							<p className="desc">Rounds: 4</p>
							<p className="desc">First published : April 1992</p>
							<p className="desc">Designers : Ronald Rivest</p>
						</div>
						<div className="output">
							<h3>
								Output <b>({this.state.cryptName})</b>
							</h3>
							<hr />
							<textarea rows={10} value={this.state.hashValue} />
						</div>
					</div>
				</div>
			</HashContainer>
		);
	}
}

const HashContainer = styled.div`
	.body {
		background-color: #f2f4f6;
		height: 100vh;
	}

	.margin-down {
		margin-bottom: 20px;
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
		flex: 2;
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
