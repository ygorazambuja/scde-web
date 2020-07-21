import React, { Component } from 'react';
import {
  FormField, Button, Box, Form
} from 'grommet';
import { Send, Checkmark } from 'grommet-icons';
import styled from 'styled-components';

import api from '../../services/api';

const buttonTheme = {
    plain: false,
    fill: 'horizontal',
    primary: true
};

export default class Login extends Component {
    state = {
        login: '',
        senha: ''
    };

    componentDidMount = () => {
        this.checkLoginBeforeLoad();
    };

    checkLoginBeforeLoad = () => {
        const { history } = this.props;

        const username = JSON.stringify(localStorage.getItem('@scde:user')) || undefined;
        const token = JSON.stringify(localStorage.getItem('@scde:token')) || undefined;

        if (token && username) history.push('/home');
    };

    onLoginChange = e => this.setState({ login: e.target.value });

    onPasswordChange = e => this.setState({ senha: e.target.value });

    doLogin = async () => {
        const { login, senha } = this.state;
        const { history } = this.props;
        const response = await api.post('/authenticateUser', {
            username: login,
            password: senha
        });

        if (response.data) {
            localStorage.setItem('@scde:token', response.data.token);
            localStorage.setItem('@scde:username', response.data.user.user);

            history.push('/home');
        }
    };

    doSolicitarAcesso = async () => {};

    render() {
        return (
          <>
            <Box align="center" justify="center">
              <h1>{'{SCDE}'}</h1>
              <Form>
                <FormField label="Usuário" name="login" onChange={this.onLoginChange} />
                <FormField
                  label="Senha"
                  name="password"
                  type="password"
                  onChange={this.onPasswordChange}
                />
                <ButtonsContainer>
                  <Button
                    {...buttonTheme}
                    icon={<Checkmark />}
                    label="Entrar"
                    onClick={this.doLogin}
                    gap="medium"
                    style={{ marginBottom: 12 }}
                    type="submit"
                  />
                  <Button
                    {...buttonTheme}
                    label="Solicitar Acesso"
                    icon={<Send />}
                    onClick={this.doSolicitarAcesso}
                    gap="medium"
                  />
                </ButtonsContainer>
              </Form>
            </Box>
            <Box style={{ position: 'absolute', bottom: 0 }}>
              <h3 style={{ color: 'lightgrey' }}>whatever it takes</h3>
            </Box>
          </>
        );
    }
}

const ButtonsContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
