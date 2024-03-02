import { Component } from "react";
import styled from 'styled-components';
import { Select, Button, Col, Row } from 'antd';

let optionsLong = [];
for (let i = 2; i <= 100; i++) {
  optionsLong.push({ value: i });
}
let optionsShort = [];
for (let i = 1; i <= 100; i++) {
  optionsShort.push({ value: i });
}

optionsLong.push({ value: 1000 });
optionsLong.push({ value: 10000 });
optionsLong.push({ value: 100000 });
optionsLong.push({ value: 1000000 });
optionsLong.push({ value: 10000000 });
optionsLong.push({ value: 100000000 });

optionsShort.push({ value: 1000 });
optionsShort.push({ value: 10000 });
optionsShort.push({ value: 100000 });

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: 1,
      d: 20,
      results: [],
      total: 0,
    }
  }

  onRun = () => {
    let results = [];
    let total = 0;
    for (let i=0; i<this.state.r; i++) {
      let a = 1 + Math.floor(Math.random()*this.state.d);
      total += a;
      results.push(a);
    }
    this.setState({results, total});
  }

  onClear = () => {
    this.setState({ results: [], total: 0 });
  }

  render() {
    
    return (
      <Body>
        <Title>
          <InLine>
            <Text>R:</Text>
            <MySelect value={this.state.r} options={optionsShort} onChange={e => this.setState({ r: e })} />
            <Text>D:</Text>
            <MySelect value={this.state.d} options={optionsLong} onChange={e => this.setState({ d: e })} />
          </InLine>
        </Title>
        <InLine>
          <MyButton type="primary" onClick={this.onRun}>Run</MyButton>
          <MyButton onClick={this.onClear}>Clear</MyButton>
        </InLine>
        <Ground>
          <h2>Total:{this.state.total}</h2>
          <Row>
            {
              this.state.results.map(v => {
                return (
                  <Col span={6}>
                    <Result>{v}</Result>
                  </Col>
                )
              })
            }
          </Row>
        </Ground>
      </Body>
    )
  }
}

export default Index;

const Body = styled.div`
  width:100%;
  height:100%;
`;

const Title = styled.div`
  height: 76px;
  margin: 5vw;
  border-radius: 15px;
  background: #b6f1cb;
`;

const Ground = styled.div`
  min-height: 50vh;
  margin: 5vw;
  border-radius: 15px;
  background: #beeefd;
  padding: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 18px;
  margin-left: 15px;
  margin-right: 5px;
`;

const InLine = styled.div`
  display: flex;
  justify-content: center;
`;

const MySelect = styled(Select)`
  width: 100px;
  text-align: center;
  margin: 20px 20px 5px 5px;
`;

const MyButton = styled(Button)`
  margin: 10px;
  width: 120px;
  border-radius: 15px;
`;

const Result = styled.div`
  width: 66px;
  height: 66px;
  border: 3px solid black;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 25px;
`;
