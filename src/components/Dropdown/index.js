import React from 'react'
import { FormControl } from 'react-bootstrap'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      selectedItem: 0
    }
    //console.log(props.items)
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("next: ", nextProps)
  //   console.log(this.props)
  //   if(nextProps.items != this.props.items)
  //   {
  //     this.setState({
  //       items: this.props.items
  //     })
  //   }
  // }
  

  handleClick = () => {
    //this.props.onClickFunction(this.props.incrementValue)
  }

  render() {
    //let items = this.state.items;
    let selectedItem = this.props.selected;
    let optionItems = this.props.items.map((item,i) => 
      selectedItem === item.id ? 
      <option key={i} selected value={item.id} onClick={this.handleClick}>{item.name}</option>
      : 
      <option key={i} value={item.id} onClick={this.handleClick}>{item.name}</option>
    );

    return (
      <FormControl componentClass="select"
        id={this.props.id}
        defaultValue={this.props.selected}> 
          {optionItems} 
      </FormControl>
    )
  }
}

export default Dropdown
