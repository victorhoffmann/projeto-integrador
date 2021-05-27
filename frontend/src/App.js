import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {console.log(window.location)}
      {window.location.pathname !== "/admin" ? <Header /> : null}
      

      <Routes />
      {window.location.pathname !== "/admin" ? <Footer /> : null}
    </>
  );
}

export default App;
