import { useState } from 'react';
import './style.css';

export const Calculeter = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(prevDisplay => prevDisplay.slice(0, -1));
  };

  const handleAddition = () => {
    setInput(prevInput => prevInput + '+');
  };

  const handleSubtraction = () => {
    setInput(prevInput => prevInput + '-');
  };

  const handleMultiplication = () => {
    setInput(prevInput => prevInput + '*');
  };

  const handleDivision = () => {
    setInput(prevInput => prevInput + '/');
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      setHistory(prevHistory => [...prevHistory, { expression: input, result }]);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleButton = (value) => {
    if (value === 'clear') {
      handleClear();
    } else if (value === 'delete') {
      handleDelete();
    } else if (value === '+') {
      handleAddition();
    } else if (value === '-') {
      handleSubtraction();
    } else if (value === '*') {
      handleMultiplication();
    } else if (value === '/') {
      handleDivision();
    } else if (value === '=') {
      handleEquals();
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className='container'>
      <table className='card'>
        <tbody>
          <tr className='display'>
            <td colSpan='4'><input value={input} readOnly /></td>
          </tr>

          <tr className='buttons'>
            <button onClick={() => handleButton('clear')} className='button clear'>C</button>
            <button onClick={() => handleButton('delete')} className='button clear'>x</button>

            <td> <button onClick={() => handleButton('7')} className='button'>7</button></td>
            <td>
              <button onClick={() => handleButton('8')} className='button'>8</button>
            </td>
            <td>
              <button onClick={() => handleButton('9')} className='button'>9</button>
            </td>
            <td><button onClick={() => handleButton('*')} className='button'>*</button>
            </td>

            <td><button onClick={() => handleButton('4')} className='button'>4</button>
            </td>
            <td>         
                 <button onClick={() => handleButton('5')} className='button'>5</button>
            </td>
            <td>
              <button onClick={() => handleButton('6')} className='button'>6</button>
            </td>
            <td>
              <button onClick={() => handleButton('+')} className='button'>+</button>

            </td>
            <td>
              <button onClick={() => handleButton('1')} className='button'>1</button>

            </td>
            <td>  <button onClick={() => handleButton('2')} className='button'>2</button>
            </td>
            <td>
              <button onClick={() => handleButton('3')} className='button'>3</button>
            </td>
            <td>
              <button onClick={() => handleButton('-')} className='button'>-</button>

            </td>

            <td>
              <button onClick={() => handleButton('0')} className='button'>0</button>

            </td>
            <td>
              <button onClick={() => handleButton('.')} className='button'>.</button>

            </td>
            <td>
              <button onClick={() => handleButton('/')} className='button'>/</button>

            </td>
            <td>
              <button onClick={() => handleButton('=')} className='button'>=</button>

            </td>         
             </tr>
        </tbody>
      </table>
      <div className='history'>
        <h3>History:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.expression} = {item.result}</li>
          ))}
        </ul>
      </div>
    </div>

  );
};
