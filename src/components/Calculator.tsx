import React, { useState } from 'react';
import './Calculator.scss';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      const expression = input.replace(/x/g, '*').replace(/÷/g, '/');

      const result = eval(expression);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <div>
      <div className="calci-main">
        <div className="calci-container">
          <div className="display">{input || '0'}</div>
        </div>
        <div className="calci-body">
          <div>
            <button onClick={clear}>C</button>
            <button onClick={() => setInput(input.slice(0, -1))}>CE</button>
            <button className="purple" onClick={() => handleClick('÷')}>
              &divide;
            </button>
          </div>
          <div>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button className="purple" onClick={() => handleClick('x')}>
              x
            </button>
          </div>
          <div>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button className="purple" onClick={() => handleClick('-')}>
              -
            </button>
          </div>
          <div>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button className="purple plus" onClick={() => handleClick('+')}>
              +
            </button>
          </div>
          <div>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button className="purple" onClick={() => calculate()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
