import React, { useState, useEffect } from 'react';
import {
  FormField, Button, Box, Form
} from 'grommet';
import { Send, Checkmark } from 'grommet-icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const buttonTheme = {
    plain: false,
    fill: 'horizontal',
    primary: true
};

const Login = () => {
    const history = useHistory();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    const checkLoginBeforeLoad = () => {
        const username = JSON.stringify(localStorage.getItem('@scde:user')) || undefined;
        const token = JSON.stringify(localStorage.getItem('@scde:token')) || undefined;
        if (token && username) history.push('/home');
    };
    useEffect(() => checkLoginBeforeLoad(), []);

    const onLoginChange = e => setLogin({ login: e.target.value });

    const onPasswordChange = e => setSenha({ senha: e.target.value });

    const doLogin = async () => {
        api.post('/login', {
            username: login,
            password: senha
        }).then((data) => {
            console.log(data);
            localStorage.setItem('@scde:token', data.token);
            localStorage.setItem('@scde:username', data.user.user);
        }).catch((error) => {
            console.log(error);
        });
    };

    const doSolicitarAcesso = async () => {};


        return (
          <>
            <Box align="center" justify="center">
              <h1>{'{SCDE}'}</h1>
              <Form>
                <FormField label="Usuário" name="login" onChange={onLoginChange} />
                <FormField
                  label="Senha"
                  name="password"
                  type="password"
                  onChange={onPasswordChange}
                />
                <ButtonsContainer>
                  <Button
                    {...buttonTheme}
                    icon={<Checkmark />}
                    label="Entrar"
                    onClick={doLogin}
                    gap="medium"
                    style={{ marginBottom: 12 }}
                    type="submit"
                  />
                  <Button
                    {...buttonTheme}
                    label="Solicitar Acesso"
                    icon={<Send />}
                    onClick={doSolicitarAcesso}
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
export default Login

const ButtonsContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
