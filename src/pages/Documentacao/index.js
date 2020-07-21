import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';
import { FormPreviousLink } from 'grommet-icons';


const Documentacao = () => (
  <Box align="center" pad="small" direction="column">
    <Box overflow="auto" direction="row" justify="between" align="center" pad="small" gap="medium">
      <Link to="/">
        <Button label="" icon={<FormPreviousLink size="30px" />} />
      </Link>
      <Heading>Documentação</Heading>     
    </Box>
    <Box pad="large" gap="large">
      <Box align="center" justify="center" gap="large">
        <Link to="/cadastrarDocumentacao">
          <Button label="Cadastrar Aluno" size="large" />
        </Link>
        <Link to="/listarDocumentacao">
          <Button label="Alunos devendo documentos" size="large" />
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Documentacao;
