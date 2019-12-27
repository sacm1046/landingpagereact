import React from 'react';
// No se agrega reactDOM ya que solo se carga en index.js
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";


const App = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                    <Navbar />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <Jumbotron />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Card img="https://placehold.it/500x325" />
                    </div>
                    <div className="col-md-3">
                        <Card img="https://placehold.it/500x325"/>
                    </div>
                    <div className="col-md-3">
                        <Card img="https://placehold.it/500x325"/>
                    </div>
                    <div className="col-md-3">
                        <Card img="https://placehold.it/500x325"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mt-5 pt-4">
                <div className="row p-4">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default App;