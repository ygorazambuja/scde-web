import React, { Component } from 'react';

import {
 Grommet, Box, Button, Heading
} from 'grommet';

import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';
import theme from '../../theme/themes';

import api from '../../services/api';
import AlunoDoc from '../../components/AlunoDoc';

export default class ListarDocumentacao extends Component {
    state = {
        alunos: []
    };

    componentWillMount = () => {
        this.fetchDocumentacao();
    };

    fetchDocumentacao = async () => {
        const result = await api.get('/documentacao');
        this.setState({ alunos: [...result.data] });
    };

    render() {
        const { alunos } = this.state;
        return (
          <Grommet theme={theme}>
            <Box direction="column" style={{ alignItems: 'center' }} pad="small">
              <Box direction="row" align="center">
                <Box
                  direction="row"
                  border={{ color: 'brand', size: 'small', style: 'dashed' }}
                  pad="small"
                  style={{ marginRight: 10 }}
                  round
                >
                  <Link to="/documentacao">
                    <Button>
                      <FormPreviousLink />
                    </Button>
                  </Link>
                </Box>
                <Box align="center" justify="center">
                  <Heading>Devendo documentação</Heading>
                </Box>
              </Box>

              <Box>
                {alunos.map(aluno => (
                            // eslint-disable-next-line no-underscore-dangle
                  <AlunoDoc data={aluno} key={aluno._id} />
                        ))}
              </Box>
            </Box>
          </Grommet>
        );
    }
}
