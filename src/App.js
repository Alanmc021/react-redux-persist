import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {store , persistor }from "./store";
import TodoList from "./TodoList";
import Auth from "../src/auth"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
           {/* <TodoList /> */}
           <Auth></Auth>
        </PersistGate>       
      </Provider>
    );
  }
}

export default App;
