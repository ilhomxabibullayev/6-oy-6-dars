import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Backend from "./components/Backend";
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
     <Navbar></Navbar>
      <Card></Card>

      <Backend></Backend>

    <Footer></Footer>

    </>
  );
}

export default App;
