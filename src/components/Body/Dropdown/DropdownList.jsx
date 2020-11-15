import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';

class DropdownList extends Component {
  render() {
    return (
      <div>
        {this.props.hashList.map((name) => {
              return <DropdownItem value={name} id={name.toLowerCase().replace("-","")}>{name}</DropdownItem>
            })}
      </div>
    );
  }
}

export default DropdownList;