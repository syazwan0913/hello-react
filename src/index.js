import React from "react";
import ReactDOM from "react-dom";

// class Hello extends React.Component {  
//     render() {  
//         return <h1>Hello world!</h1>;  
//     }  
// }
  
// ReactDOM.render(<Hello />, document.getElementById("root"));
  

class Child extends React.Component {
    componentDidMount() {
      const { childRef } = this.props;
      childRef(this);
    }
    componentWillUnmount() {
     const { childRef } = this.props;
      childRef(undefined);
    }
    alertMessage() {
      window.alert('called from parent component');
    }
    render() {
      return <h1>Hello World!</h1>
    }
  }
  
  export default Child;

  class Parent extends React.Component {
    onClick = () => {
      this.child.alertMessage();
    }
    render() {
      return (
        <div>
          <Child childRef={ref => (this.child = ref)} />
          <button onClick={this.onClick}>Child.alertMessage()</button>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(<Parent />, document.getElementById("root"));


