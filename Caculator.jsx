import { useState } from "react";

import './App.css'
function Calculator() {
    const [inputValue, setInputValue] = useState('')
    
    function Display(value) {
        setInputValue(inputValue.concat(value))
    }
    function calculate () {
        let answer = eval(inputValue)
        setInputValue(answer)
    }
    function clear() {
        setInputValue('');
    }
    return ( 
        <>
            <form name="calc" className="calculator">
                <input
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                type="text" 
                className="value"/>
                <span className="num clear" onClick={() => clear()}>c</span>
                <span onClick={() => Display('/')}>/</span>
                <span onClick={() => Display('*')}>*</span>
                <span onClick={() => Display(7)}>7</span>
                <span onClick={() => Display(8)}>8</span>
                <span onClick={() => Display(9)}>9</span>
                <span onClick={() => Display('-')}>-</span>
                <span onClick={() => Display(4)}>4</span>
                <span onClick={() => Display(5)}>5</span>
                <span onClick={() => Display(6)}>6</span>
                <span className="plus" onClick={() => Display('+')}>+</span>
                <span onClick={() => Display(1)}>1</span>
                <span onClick={() => Display(2)}>2</span>
                <span onClick={() => Display(3)}>3</span>
                <span onClick={() => Display(0)}>0</span>
                <span onClick={() => Display('00')}>00</span>
                <span onClick={() => Display('.')}>.</span>
                <span className="num equal" onClick={() => calculate()}>=</span>
            </form> 
        </>
        );
}

export default Calculator;