import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function BarraNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/contacto">Contacto</a>
            <a className="navbar-brand" href="/infoapp">Info App</a>
        </nav>
    );
}

function Home() {
    return (
        <h1>Bienvenidos a la applicacion de navegacion</h1>
    );
}

class Contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            rangoEtareo: '0'

        };
        this.almacenaCambios = this.almacenaCambios.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    almacenaCambios(evt) {
        console.log(evt.target.value);
        switch (evt.target.id) {
            case 'nombre':
                this.setState({ nombre: evt.target.value });
                break;
            case 'rangoEtareo':
                this.setState({ rangoEtareo: evt.target.value });
                break;
        }
        let __this = this;
        setTimeout(function() {
            console.log(__this.state);
        },100)
    }

    doSubmit() {
        alert('HTTP POST CON: ' + JSON.stringify(this.state));
        // aca vamos a hacer un http post.
        setTimeout(function() {
            alert('Usuario dado de alta.');
        },3000);
    }

    render() {
        return (
            <div>
            <h1>Ingrese los datos de contacto</h1>
                <input id="nombre" value={this.state.nombre} type="text" onChange={this.almacenaCambios} placeholder="Ingrese nombre" />
                <span>Franja etarea</span>
                <select id="rangoEtareo" onChange={this.almacenaCambios}>
                    <option value="0">0-20</option>
                    <option value="21">21-40</option>
                    <option value="41">41-60</option>
                    <option value="61">+60</option>
                </select>
                <br /><br />
                <input id="sbm" type="button" onClick={this.doSubmit} value="GO!!!" />
            </div>
        );
    }
    
}

function InfoApp() {
    return (
        <h1>Esta app fue diseñada en los laboratorios labs</h1>
    );
}

function Error404() {
    return (
        <h1>Error: 404 No encontro ningun componente asociado a esa ruta</h1>
    );
}

class BarraNavegacion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <BarraNav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/infoapp" component={InfoApp} />
                        <Route exact component={Error404} />
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default BarraNavegacion;