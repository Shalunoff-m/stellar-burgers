import React from "react";
import "./App.css";
import Page from "./components/page/page";
import Header from "./components/app-header/app-header";

function App() {
  return (
    <Page color="white">
      <Header />
      Какой-то там текст
    </Page>
  );
}

export default App;
