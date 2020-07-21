import React from 'react';
import {
Box, Button, Heading  
} from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';

export default function index() {
    return (
      <>
        <Box align="center" pad="medium" justify="center" gap="large">
          <Box direction="row" align="center" justify="center">
            <Link to="/home">
              <Button icon={<FormPreviousLink size="large" />} />
            </Link>
            <Heading>
              Gerador de Documentos
            </Heading>
          </Box>
          <Box>
            <Link to="/cancelamentoDeMatricula">
              <Button label="Requerimento de Cancelamento de Matricula" />
            </Link>
          </Box>
          <Box>
            <Button label="Requerimento de Expedição de Transferência" />
          </Box>
        </Box>
      </>
    );
}
