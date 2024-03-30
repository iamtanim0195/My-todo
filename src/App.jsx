
import { Provider } from 'react-redux'
import './App.css'
import store, { persistor } from './redux/store'
import Todo from './components/Todo'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  )
}

export default App
