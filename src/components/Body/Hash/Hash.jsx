import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Input, Col } from 'reactstrap';
import crypto from 'crypto';
import './Hash.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Hash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      cryptName: "MD-5", //initial state
      hashAlgorithm: "md5", //initial state
      encodingAlgorithm: "",
      isSelected: false,
      isHash: true,
      textValue: "",
      hashValue: "",
      hashList: ["MD-5","SHA-1","SHA-224","SHA-256","SHA-384","SHA-512"]
    }
    this.toogleDropdown = this.toogleDropdown.bind(this);
    this.encrypt = this.encrypt.bind(this);
    this.setHashAlgorithm = this.setHashAlgorithm.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  toogleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  encrypt() {
    const hash = crypto.createHash(this.state.hashAlgorithm);
    hash.on('readable', () => {
      const data = hash.read();
      if(data) {
        this.setState({
          hashValue: data.toString('hex')
        });
      }
    });
    console.log(this.state.textValue);
    hash.write(this.state.textValue);
    hash.end();
  }

  setHashAlgorithm(e) {
    this.setState({
      cryptName: e.target.value,
      hashAlgorithm: e.target.id
    }, () => this.encrypt());
  }

  handleTextInput(e) {
    this.setState({
      textValue: e.target.value
    }, () => this.encrypt())
  }

  render() {
    return (
      <div className="body">
        <div className="app">
          <div className="input">
            <h3>Input</h3>
            <hr/>
            <textarea type="textarea" rows={10} spellCheck="false" placeholder="The quick brown fox jumps over the lazy dog." onChange={this.handleTextInput} />
          </div>
          <div className="select">
            <h3>Select Hash</h3>
            <hr/>
            <ButtonDropdown className="margin-down" isOpen={this.state.dropdownOpen} toggle={this.toogleDropdown}>
              <DropdownToggle caret>{this.state.cryptName}</DropdownToggle>
              <DropdownMenu>
                {this.state.hashList.map((name) => {
                  return <DropdownItem value={name} id={name.toLowerCase().replace("-","")} onClick={this.setHashAlgorithm}>{name}</DropdownItem>
                })}
              </DropdownMenu>
            </ButtonDropdown>
            <h3 class="title"><b>Description</b></h3>
            <p class="desc">Name : MD-5</p>
            <p class="desc">Digest sizes : 128-bit</p>
            <p class="desc">Block sizes: 512 bit</p>
            <p class="desc">Rounds: 4</p>
            <p class="desc">First published : April 1992</p>
            <p class="desc">Designers : Ronald Rivest</p>
          </div>
          <div className="output">
            <h3>Output <b>({this.state.cryptName})</b></h3>
            <hr/>
            <textarea type="textarea" rows={10} value={this.state.hashValue} />
          </div>
        </div>
      </div>
    );
  }
}