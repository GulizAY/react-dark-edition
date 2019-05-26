import React, { Component } from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';

class Toasts extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="alert-toasts">
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_RIGHT}/>
      </div>
    );
  }

}
// function render(){
//     return <div>
//         <button onClick={() => ToastStore.error("There is an error :'(")}>Click me !</button>
//         <ToastContainer store={ToastStore}/>
//     </div>
// }

export default Toasts;