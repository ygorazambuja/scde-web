import React, { useState, useEffect } from 'react';

import { Box, Button, Heading } from 'grommet';

import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import AlunoDoc from '../../components/AlunoDoc';

const ListarDocumentacao = () => {
  const [alunos, setAlunos] = useState([]);

  const fetchDocumentacao = async () => {
    const { data } = await api.get('/alunos');
    setAlunos(data);
  };

  useEffect(() => {
    fetchDocumentacao();
  }, [0]);
  return (
    <>
      <Box direction="column" align="center" pad="small">
        <Box direction="row" align="center" gap="medium" justify="between">
          <Box direction="row">
            <Link to="/documentacao">
              <Button>
                <FormPreviousLink size="large" />
              </Button>
            </Link>
          </Box>
          <Box align="center" justify="center">
            <Heading>Devendo documentação</Heading>
          </Box>
        </Box>

        <Box gap="small">
          {alunos.map((aluno) => (
            //  eslint-disable-next-line no-underscore-dangle
            <AlunoDoc data={aluno} key={aluno._id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ListarDocumentacao;
