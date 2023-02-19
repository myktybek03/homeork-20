import Header from "./components/Header"
import Auth from "./components/Auth"
import Calculator from "./components/Calculator"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Calculator />
        {/* <UserProfile /> */}
        <Auth />
      </Provider>
    </>
  )
}

export default App
