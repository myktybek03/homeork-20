import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { authActions } from "../store/auth/authSlice"

const Auth = () => {
  const dispatch = useDispatch()

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })

  const inputChangeHandler = (name) => {
    return (e) => {
      setFormState((prevState) => ({ ...prevState, [name]: e.target.value }))
    }
  }

  const SubmitHandler = (e) => {
    e.preventDefault()

    dispatch({
      type: authActions.logIn,
      email: formState.email,
      password: formState.password,
    })
  }

  return (
    <AuthStyle>
      <section>
        <form onSubmit={SubmitHandler}>
          <Control>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </Control>
          <Control>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </Control>
          <button>Login</button>
        </form>
      </section>
    </AuthStyle>
  )
}

export default Auth

const AuthStyle = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`

const Control = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`
