import { faMinus, faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import counterStore from './stores/counterSote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const App = () => {
  const [numberInput, setNumberInput] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [warning, setWarning] = useState(false);

  const count = counterStore((state) => state.count);
  const reset = counterStore((state) => state.reset);
  const increase = counterStore((state) => state.increase);
  const decrease = counterStore((state) => state.decrease);

  const handleChangeNumberInput = (event) => {
    const value = event.target.value;

    if (value === '') {
      setNumberInput('');
      setIsDisabled(true);
      setWarning(true);
      return;
    }

    const number = Number(value);

    if (number < 1 || number > 10000) {
      setIsDisabled(true);
      setWarning(true);
    } else {
      setIsDisabled(false);
      setWarning(false);
    }

    setNumberInput(number);
  };

  console.log(warning);

  return (
    <div className='counter'>
      <button className='counter__button counter__button--reset' onClick={reset}>
        RESET
      </button>
      <div className='counter__value'>{count}</div>
      <div className='counter__controls'>
        <button
          className='counter__button counter__button--decrease'
          disabled={isDisabled}
          onClick={() => decrease(Number(numberInput))}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          type='number'
          className='counter__input'
          value={numberInput}
          style={{ opacity: `${isDisabled ? '0.5' : '1'}` }}
          onChange={handleChangeNumberInput}
        />
        <button
          className='counter__button counter__button--increase'
          disabled={isDisabled}
          onClick={() => increase(Number(numberInput))}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {warning && (
        <div className='warning'>
          <FontAwesomeIcon icon={faTriangleExclamation} /> 숫자는 1 이상 10000 이하로만 입력 가능합니다.
        </div>
      )}
    </div>
  );
};

export default App;
