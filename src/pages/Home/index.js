import React from 'react';
import { 
  Box, Heading, Button, Clock 
} from 'grommet';
import { Search } from 'grommet-icons';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    padding: 20,
    width: 220,
    fontSize: '24px',
  },
};

const App = () => 
  (
    <React.Fragment>
      <Box style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box align="center" pad="medium" round>
          <Heading size="large">{'{SCDE}'}</Heading>
          <Clock type="digital" />
          <Box justify="between">
            <Box style={{ padding: 20, margin: 10 }}>
              <Link to="/busca">
                <Button
                  icon={<Search />}
                  label="Buscar Alunos"
                  style={styles.button}
                />
              </Link>
            </Box>
            {/* <Box style={{ padding: 20, margin: 10 }}>
              <Link to="/documentacao">
                <Button
                  icon={<Edit />}
                  label="Documentação"
                  style={styles.button}
                />
              </Link>
            </Box> */}
            {/*
              <Box style={{ padding: 20, margin: 10 }}>
                <Link to="/recados">
                  <Button icon={<Chat />} label="Recados" style={styles.button} />
                </Link>
              </Box>
              <Box style={{ padding: 20, margin: 10 }}>
                <Link to="/gerarDocumentos">
                  <Button
                    icon={<Catalog />}
                    label="Gerar Documentos"
                    style={styles.button}
                  />
                </Link>
              </Box> */}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );


export default App;
