/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
 Box, Heading, TextInput, Button, Text, Form, 
} from 'grommet';
import { Link } from 'react-router-dom';
import { FormPreviousLink } from 'grommet-icons';
import { HashLoader } from 'react-spinners';
import Aluno from '../../components/Aluno';
import api from '../../services/api';

const Busca = () => {
    const [nameInput, setNameInput] = useState('');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alunos, setAlunos] = useState({});

    const fetchAlunosFromWeb = () => {
        api.get('/alunos')
            .then((res) => {
                setAlunos(res.data);
                setIsLoading(false);
                setNameInput('');
                const alunosString = res.data;
                localStorage.setItem(
                    '@scde:alunos',
                    JSON.stringify(alunosString)
                );
            })
            .catch(() => {});
    };

    const fetchAlunosFromLocalStorage = () => {
        const alunosString = localStorage.getItem('@scde:alunos');
        if (alunosString) {
            const alunosParsed = JSON.parse(alunosString);
            setIsLoading(false);
            setAlunos(alunosParsed);
        } else {
            fetchAlunosFromWeb();
        }
    };

    const fetchAlunosFromLocalStorageOrWeb = () => {
        fetchAlunosFromLocalStorage();
    };

    const filterAlunos = (e) => {
        e.preventDefault();
        if (nameInput.trim().length !== 0) {
          const filtro = alunos.filter((aluno) => {
            const regex = new RegExp(nameInput, 'gi');
            return regex.test(aluno.nome);
        });
        setDadosFiltrados(filtro);
        }
    };

    const listRender = nameInput.trim() && (
    <Box pad="small">
      {dadosFiltrados.map(aluno => (
                // eslint-disable-next-line no-underscore-dangle
        <Aluno key={aluno._id} {...aluno} />
            ))}
    </Box>
    );

    useEffect(() => {
        fetchAlunosFromLocalStorageOrWeb();
    }, []);

    useEffect(() => {
      if (nameInput === '') setDadosFiltrados([]);
    }, [nameInput]);
    return (
      <Box align="center" pad="small" direction="column">
        <Box direction="row" justify="between" align="center" pad="large" gap="large">
          <Link to="/">
            <Button label="" icon={<FormPreviousLink size="30px" />} />
          </Link>
          <Heading>Alunos Antigos</Heading>     
        </Box>
        <Box margin="large">
          <Form onSubmit={filterAlunos}>
            <Box direction="row">
              <TextInput
                style={{ borderColor: '#7D4CDB' }}
                placeholder="Pesquise Aqui !"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                disabled={isLoading}                
              />
              <Button primary label="Buscar" disabled={isLoading} onClick={e => filterAlunos(e)} />
            </Box>
          </Form>
        </Box>
        

        {isLoading && (
        <HashLoader
          size={100}
          sizeUnit="px"
          css="margin-bottom: 100px;"
        />
            )}
        <Box>{listRender}</Box>

        {!dadosFiltrados.length && (
        <Box alignContent="center" justify="center">
          <Text size="large" align="center">
            <strong style={{ color: '#7D4CDB' }}>Carregando</strong>
            <br />
            Para começar, digite algum
            <strong style={{ color: '#7D4CDB' }}> nome!</strong>
            <strong> e tecle ENTER</strong>
          </Text>
        </Box>
            )}
      </Box>
    );
};

export default Busca;
