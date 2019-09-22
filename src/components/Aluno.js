import React from 'react';
import { Box, Text } from 'grommet';

const Aluno = ({ aluno }) => (
  <Box direction="row" justify="between" style={{ borderBottomWidth: 1, padding: 5, margin: 5 }}>
    <Text size="large">{aluno.nome}</Text>
    <Box>
      <Text>{aluno.serie}</Text>
      <Text>
        <strong>{aluno.ano}</strong>
      </Text>
    </Box>
  </Box>
);

export default Aluno;
