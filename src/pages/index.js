import { Component } from "react";
import styled from 'styled-components';

class Index extends Component {
  render() {
    return (
      <Body></Body>
    )
  }
}

export default Index;

const Body = styled.div`
  width:100%;
  height:100%;
  background: blue;
`;
