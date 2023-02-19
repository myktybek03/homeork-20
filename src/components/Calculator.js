import { useDispatch, useSelector } from "react-redux"
import { calcActions } from "../store/calculator/calculatorSlice"
import styled from "styled-components"

const Calculator = () => {
  const { result } = useSelector((state) => state.calculator)

  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch({ type: calcActions.plus, payload: 5 })
  }

  const divideHandler = () => {
    dispatch({ type: calcActions.divide, payload: 4 })
  }

  const minusHandler = () => {
    dispatch({ type: calcActions.minus, payload: 10 })
  }

  const multiplyHandler = () => {
    dispatch({ type: calcActions.multiply, payload: 2 })
  }

  return (
    <Container>
      <h1>Redux Calculator</h1>
      <Value>Result: {result}</Value>
      <button onClick={addHandler}>+5</button>
      <button onClick={minusHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </Container>
  )
}

export default Calculator

const Container = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }
`

const Value = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`
