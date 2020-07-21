/* eslint-disable no-console */
import React, { Component } from 'react';
import socket from 'socket.io-client';
import {
 Grommet, Box, Heading, Button
} from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';
import Recado from '../../components/Recado';
import api from '../../services/api';
import theme from '../../theme/themes';

export default class Recados extends Component {
    state = {
        recados: []
    };

    subscribeToEvents = () => {
        const io = socket('https://api-backend-scde.herokuapp.com');
        io.on('recado', (data) => {
            const { recados } = this.state;
            this.setState({ recados: [data, ...recados] });
        });
    };

    fetchData = () => {
        api.get('/recados')
            .then(res => this.setState({ recados: res.data }))
            .catch(err => console.log(err));
    };

    componentDidMount = () => {
        this.verificaLogin();

        this.subscribeToEvents();
        this.fetchData();
    };

    verificaLogin = () => {
        const user = localStorage.getItem('@scde:user') || null;
        if (!user) {
            // usuario não conectado, redirecionar para pagina de login
        }
    };

    render() {
        const { recados } = this.state;
        return (
          <>
            <Box direction="row" align="center" pad="small" style={{ padding: 10 }}>
              <Box border={{ color: 'brand', size: 'small', style: 'dashed' }} round>
                <Link to="/">
                  <Button icon={<FormPreviousLink />} />
                </Link>
              </Box>
              <Heading style={{ paddingLeft: 20 }}> Recados </Heading>
            </Box>
            <Box>
              {recados.map(recado => (
                        // eslint-disable-next-line no-underscore-dangle
                <Recado recado={recado} key={recado._id} />
                    ))}
            </Box>
          </>
        );
    }
}
