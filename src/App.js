
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
    
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;


