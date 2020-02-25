import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CalcButton from './CalcButton';

const styles = {
  container: {
    borderStyle: 'solid',
    maxWidth: '300px'
  },
  row: {
    padding: '4px 0px'
  }
}

export default class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      computed: 0,
      display: 0,
      input: '',
      operator: '='
    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
  }

  handleNumberClick = (number) => {
    const { input } = this.state;
    const newInput = input.concat(number);
    this.setState({ display: newInput, input: newInput });
  }

  handleOperatorClick = (operator) => {
    const { input, computed } = this.state
    const newComputed = input.length? this.computeOperation() : computed
    this.setState({ computed: newComputed, display: newComputed, input: '', operator })
  }

  computeOperation = () => {
    const { computed, input, operator } = this.state;
    const parsedInput = input.length ? Number.parseFloat(input) : 0
    let result;
    switch(operator) {
      case '+':
        result = computed + parsedInput;
        break;
      case '-':
        result = computed - parsedInput;
        break;
      case '*':
        result = computed * parsedInput;
        break;
      case '/':
        result = computed / parsedInput;
        break;
      default:
        result = parsedInput;    
    }
    return result;
  }

  render() {
    const { display } = this.state;

    return (
      <Container style={styles.container}>
        <Row style={styles.row} >
          <Col>{ display }</Col>
        </Row>
        <Row style={styles.row} >
          <Col><CalcButton value={7} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={8} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={9} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={'/'} onClick={ this.handleOperatorClick } /></Col>
        </Row>
        <Row style={styles.row} >
          <Col><CalcButton value={4} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={5} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={6} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={'*'} onClick={ this.handleOperatorClick } /></Col>
        </Row>
        <Row style={styles.row} >
          <Col><CalcButton value={1} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={2} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={3} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={'-'} onClick={ this.handleOperatorClick } /></Col>
        </Row>
        <Row style={styles.row} >
          <Col><CalcButton value={0} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={'.'} onClick={ this.handleNumberClick } /></Col>
          <Col><CalcButton value={'='} onClick={ this.handleOperatorClick } /></Col>
          <Col><CalcButton value={'+'} onClick={ this.handleOperatorClick } /></Col>
        </Row>
      </Container>
    );
  }
}
