import React, { useState } from 'react';
import '../style/calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clearHandler = () => {
    setResult('');
  }

  const deleteHandler = () => {
    setResult(result.slice(0, -1))
  }

  const outputHandler = (val) => {
    if(val.includes('+')) {
      const plusSplit = val.split('+');
      let plusResult = 0;
      for(let i= 0; i < plusSplit.length; i++) {
        plusResult = plusResult + Number(plusSplit[i]);
        setResult(plusResult);
      }
    } else if(val.includes('-')) {
      let subtractSplit = val.split('-')
      let subtract = subtractSplit.reduce((accumulator, currentValue) => {
        return accumulator - currentValue
      })
      setResult(subtract)
    } else if(val.includes('*')) {
      let multiplySplit = val.split('*')
      let multiply = multiplySplit.reduce((accumulator, currentValue) => {
        return accumulator * currentValue
      })
      setResult(multiply)
    } else if(val.includes('/')) {
      let divideSplit = val.split('/')
      let divide = divideSplit.reduce((accumulator, currentValue) => {
        return accumulator / currentValue
      })
      setResult(divide)
    } else {
      setResult('Error');
    }
  }

  return (
    <div className='calculatorContainer'>
        <form>
            <input type='text' value={result} />
        </form>
        <div className='keypadContainer'>
            <button className='buttonCommonStyle highlight' id='clear' onClick={clearHandler}>Clear</button>
            <button className='buttonCommonStyle highlight' id='backspace' onClick={deleteHandler}>C</button>
            <button className='buttonCommonStyle highlight' name='/' onClick={handleClick}>&divide;</button>
            <button className='buttonCommonStyle' name='7' onClick={handleClick}>7</button>
            <button className='buttonCommonStyle' name='8' onClick={handleClick}>8</button>
            <button className='buttonCommonStyle' name='9' onClick={handleClick}>9</button>
            <button className='buttonCommonStyle highlight' name='*' onClick={handleClick}>&times;</button>
            <button className='buttonCommonStyle' name='4' onClick={handleClick}>4</button>
            <button className='buttonCommonStyle' name='5' onClick={handleClick}>5</button>
            <button className='buttonCommonStyle' name='6' onClick={handleClick}>6</button>
            <button className='buttonCommonStyle highlight' name='-' onClick={handleClick}>&ndash;</button>
            <button className='buttonCommonStyle' name='1' onClick={handleClick}>1</button>
            <button className='buttonCommonStyle' name='2' onClick={handleClick}>2</button>
            <button className='buttonCommonStyle' name='3' onClick={handleClick}>3</button>
            <button className='buttonCommonStyle highlight' name='+' onClick={handleClick}>+</button>
            <button className='buttonCommonStyle' name='0' onClick={handleClick}>0</button>
            <button className='buttonCommonStyle' name='.' onClick={handleClick}>.</button>
            <button className='buttonCommonStyle highlight' id='result' onClick={() => outputHandler(result)}>=</button>
        </div>
    </div>
  );
}

export default Calculator;