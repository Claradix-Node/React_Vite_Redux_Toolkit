
import './App.css'
import reactLogo from './assets/react.svg'
import CakeView from './features/cake/CakeView'
import IcecreamSlice from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <CakeView />
      <IcecreamSlice />
      <UserView />
    </div>
  )
}

export default App
