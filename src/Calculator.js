import { useState } from 'react'
import operations from './operations'

function Calculator() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [operationType, setOperationType] = useState('add')
  const [symbol, setSymbol] = useState('+')
  const [result, setResult] = useState(0)

  function getResult() {
    let returnedResult

    if (operationType === 'add') {
      returnedResult = operations.add(number1, number2)
    }
    else if (operationType === 'subtract') {
      returnedResult = operations.subtract(number1, number2)
    }
    else if (operationType === 'multiply'){
      returnedResult = operations.multiply(number1, number2)
    }

    setResult(returnedResult)
  }

  function reset() {
    setNumber1(0)
    setNumber2(0)
    setResult(0)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Input Two Numbers</h1>
        <div className="input-row">
          <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
          />
          {symbol}
          <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={getResult}>Calculate</button>
        <h2 id="result">{result}</h2>
        <div>
          <button className="reset" onClick={reset}>Reset</button>
          <button onClick={() => {
              setOperationType('add')
              setSymbol('+')
              setResult(0)
            }}
          >
            Add
          </button>
          <button onClick={() => {
              setOperationType('subtract')
              setSymbol('-')
              setResult(0)
            }}
          >
            Subtract
          </button>
          <button id="multiply" onClick={() => {
              setOperationType('multiply')
              setSymbol('x')
              setResult(0)
            }}
          >
            Multiply
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator