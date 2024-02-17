import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [completeOperation, setCompleteOperation] = useState('0');

  const handleAddNumber = (number) => {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      'x': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    if (number === 'C') {
      setCompleteOperation('0');
      return;
    }

    if (number === '=') {
      const tokens = completeOperation.split(/([+\-x/])/);
      let result = parseFloat(tokens[0]);
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const num = parseFloat(tokens[i + 1]);
        const op = operations[operator];
        result = op(result, num);
      }
      setCompleteOperation(result.toString());
      return;
    }

    if (completeOperation === '0' && !isNaN(number)) {
      setCompleteOperation(number);
    } else {
      setCompleteOperation(`${completeOperation}${number}`);
    }
  }
  // const handleAddNumber = (number) => {
  //   setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`);
  // }
  // const handleOnClear = () => {
  //   setCurrentNumber('0');
  // }
  return (
    <Container>
      <Content>
        <Input value={completeOperation} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="C" onClick={() => handleAddNumber('C')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={() => handleAddNumber('x')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="/" onClick={() => handleAddNumber('/')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="+" onClick={() => handleAddNumber('+')} />
          <Button label="-" onClick={() => handleAddNumber('-')} />
          <Button label="=" onClick={() => handleAddNumber('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
