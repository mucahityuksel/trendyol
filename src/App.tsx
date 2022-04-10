import './App.css';
import MyRoute from './myroute';
import 'rsuite/styles/index.less';
import 'rsuite/dist/rsuite.min.css'
import { store } from "./redux/store"
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRoute />
      </div>
    </Provider>
  );
}

export default App;
