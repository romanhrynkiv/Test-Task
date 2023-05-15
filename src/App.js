import logo from './logo.svg';
import './App.css';
import PriceCalculator from './components/PriceCalculator';
import Header from './components/Header';
import { Fragment } from 'react';
import theme from './themes/theme';
import CurrencyDropdown from './components/Currency/CurrencyDropdown';
import { Provider } from 'react-redux';


function App() {
  return (
    <Fragment>

      <Header></Header>
      <PriceCalculator/>
    </Fragment>
  );
}

export default App;
