import React from 'react';
import {
 Grommet, Box, Button, grommet
} from 'grommet';
import { Link } from 'react-router-dom';

export default function index() {
    return (
      <Grommet theme={grommet}>
        <Box align="center" pad="medium" justify="center">
          <Box>
            <Link to="/cancelamentoDeMatricula">
              <Button label="Requerimento de Cancelamento de Matricula" />
            </Link>
          </Box>
          <Box>
            <Button label="Requerimento de Expedição de Transferência" />
          </Box>
          <Box>
            <Button label="Algum outro" />
          </Box>
        </Box>
      </Grommet>
    );
}
