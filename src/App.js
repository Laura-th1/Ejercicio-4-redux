import React from "react";

import { Provider } from "react-redux";
import { Store } from "./Componentes/Store";
import CounterComponent from "./Componentes/CounterComponent";
import styles from "./Styles/App.module.css";

const App = () => {
  return (
    <Provider store={Store}>
      <div className={styles.app}>
        <h1>Contador (Redux)</h1>
        <CounterComponent />
      </div>
    </Provider>
  );
};
export default App; 
