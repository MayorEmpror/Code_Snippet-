import Navbar from "./WebNavbar";
import Footer from "./WebFooter";
import Body from "./ContentBody";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = "hello world";
    return (
      <>
        <Navbar />
        {name}
        <Body />
        <Footer />
      </>
    );
  }
}
