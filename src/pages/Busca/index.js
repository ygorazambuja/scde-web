import React, { Component } from 'react';
import {
 Grommet, Box, Heading, TextInput, Button, Text, Form
} from 'grommet';
import { Link } from 'react-router-dom';
import { FormPreviousLink } from 'grommet-icons';
import { HashLoader } from 'react-spinners';
import Aluno from '../../components/Aluno';
import theme from '../../theme/themes';
import api from '../../services/api';

export default class Busca extends Component {
    state = {
        inputNome: '',
        isLoading: true,
        alunos: [],
        dadosFiltrados: []
    };

    componentWillMount = () => {
        this.fetchAlunosFromLocalStorageOrWeb();
    };

    fetchAlunosFromLocalStorageOrWeb = () => {
        this.fetchAlunosFromLocalStorage();
    };

    fetchAlunosFromLocalStorage = () => {
        const alunosString = localStorage.getItem('@scde:alunos');
        if (alunosString) {
            const alunos = JSON.parse(alunosString);
            this.setState({ isLoading: false });
            this.setState({ alunos });
        } else {
            this.fetchAlunosFromWeb();
        }
    };

    fetchAlunosFromWeb = () => {
        api.get('/alunos')
            .then((res) => {
                this.setState({ alunos: res.data, isLoading: false });
                const alunosString = res.data;
                localStorage.setItem('@scde:alunos', JSON.stringify(alunosString));
            })
            .catch(() => {});
    };

    filterAlunos = (e) => {
        e.preventDefault();
        const { alunos, inputNome } = this.state;
        const dadosFiltrados = alunos.filter((aluno) => {
            const regex = new RegExp(inputNome, 'gi');
            return regex.test(aluno.nome);
        });
        this.setState({ dadosFiltrados });
    };

    render() {
        const { inputNome, isLoading, dadosFiltrados } = this.state;

        const listRender = inputNome.trim() && (
        <Box pad="small">
          {dadosFiltrados.map(aluno => (
                    // eslint-disable-next-line no-underscore-dangle
            <Aluno key={aluno._id} aluno={aluno} />
                ))}
        </Box>
        );

        return (
          <Grommet theme={theme}>
            <Box align="center">
              <Box direction="row" align="center" justify="center">
                <Box border round style={{ borderColor: '#7D4CDB', marginRight: '2em' }}>
                  <Link to="/">
                    <Button label="" icon={<FormPreviousLink />} />
                  </Link>
                </Box>

                <Heading>Buscar Alunos</Heading>
              </Box>
              <Form onSubmit={this.filterAlunos}>
                <TextInput
                  style={{ borderColor: '#7D4CDB' }}
                  placeholder="Pesquise Aqui !"
                  value={inputNome}
                  onChange={e => this.setState({ inputNome: e.target.value })}
                />
              </Form>
            </Box>
            {listRender}
            {!dadosFiltrados.length && (
            <Box style={{ alignItems: 'center', marginTop: '4em' }}>
              {isLoading && (
              <HashLoader size={100} sizeUnit="px" css="margin-bottom: 100px;" />
                        )}
              <Text size="large" align="center">
                <strong style={{ color: '#7D4CDB' }}>Carregando</strong>
                <br />
                            Para começar, digite algum
                <strong style={{ color: '#7D4CDB' }}> nome!</strong>
                <strong> e tecle ENTER</strong>
              </Text>
            </Box>
                )}
          </Grommet>
        );
    }
}
