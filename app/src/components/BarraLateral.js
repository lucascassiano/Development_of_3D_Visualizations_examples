import React, { Component } from 'react';

import '../App.css';

class BarraLateral extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        var items = this.props.database.exames.map(
            (exame) => <li className="nome-exame" onClick={() => this.props.clickCallback(exame)}>{exame.nome_paciente}</li>
        );

        return (
            <div className="barra-lateral">
                <h2>{this.props.title}</h2>
                <ul>{items}</ul>
            </div>
        );
    }
}

export default BarraLateral;
