import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Input, Col } from 'reactstrap';
import crypto from 'crypto';
import './Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Body extends Component {
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
    this.encode = this.encode.bind(this);
    this.setHashAlgorithm = this.setHashAlgorithm.bind(this);
    this.setEncodingAlgorithm = this.setEncodingAlgorithm.bind(this);
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

  encode() {
    console.log(this.state.textValue);
    let data = this.state.textValue;
    let buff = new Buffer(data);
    let base64data = buff.toString(this.state.encodingAlgorithm);
    this.setState({
      hashValue: base64data
    })
    console.log(base64data);
  }

  setHashAlgorithm(e) {
    this.setState({
      cryptName: e.target.value,
      hashAlgorithm: e.target.id
    }, () => this.encrypt());
  }

  setEncodingAlgorithm(e) {
    this.setState({
      cryptName: e.target.value,
      encodingAlgorithm: e.target.id,
      isHash: !this.state.isHash
    }, () => this.encode());
  }

  handleTextInput(e) {
    if(this.state.isHash){
      this.setState({
        textValue: e.target.value
      }, () => this.encrypt())
    }else{
      this.setState({
        textValue: e.target.value
      }, () => this.encode())
    }
  }

  render() {
    return (
      <div className="body">
        <h3>Yeaa crypt it baby!</h3>
        <hr/>
        <ButtonDropdown className="margin-down" isOpen={this.state.dropdownOpen} toggle={this.toogleDropdown}>
          <DropdownToggle caret>
            {this.state.cryptName}
          </DropdownToggle>
          <DropdownMenu>
            {this.state.hashList.map((name) => {
              return <DropdownItem value={name} id={name.toLowerCase().replace("-","")} onClick={this.setHashAlgorithm}>{name}</DropdownItem>
            })}
            <DropdownItem divider />
            <DropdownItem value="Base 64" id="base64" onClick={this.setEncodingAlgorithm}>Base 64</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <FormGroup row>
          <Col>
            <p>Input</p>
            <Input type="textarea" name="text" id="exampleText" rows="10" onChange={this.handleTextInput}/>
          </Col>
          <Col>
            <p>Output <b>({this.state.cryptName})</b></p>
            <Input type="textarea" name="text" id="exampleText" rows="3" value={this.state.hashValue} />
          </Col>
        </FormGroup>
      </div>
    );
  }
}