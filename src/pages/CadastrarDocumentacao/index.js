import React, { Component } from 'react';
import {
 Grommet, Box, Form, FormField, Button, Heading, CheckBox, Text
} from 'grommet';

import { Link } from 'react-router-dom';
import { Checkmark, FormPreviousLink } from 'grommet-icons';
import theme from '../../theme/themes';
import api from '../../services/api';

const styles = {
    checkbox: {
        lineHeight: 1.2
    }
};

export default class CadastrarDocumentacao extends Component {
    state = {
        aluno: '',
        certidaoNascimento: false,
        comprovanteEndereco: false,
        carteiraVacina: false,
        transferencia: false,
        declaracaoTransferencia: false,
        loading: false
    };

    verifica = () => {
        // logica de verificação e validação
        this.salva();
    };

    salva = () => {
        const docs = { ...this.state };
        delete docs.loading;
        api.post('/documentacao', { ...this.state })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(docs);
    };

    render() {
        const {
            aluno,
            certidaoNascimento,
            carteiraVacina,
            comprovanteEndereco,
            declaracaoTransferencia,
            transferencia
        } = this.state;
        return (
          <Grommet theme={theme}>
            <Box align="center" justify="center" style={{ marginBottom: '100px' }}>
              <Box direction="row" align="center" pad="large">
                <Box
                  border={{ color: 'brand', size: 'medium', style: 'dashed' }}
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

                <Heading>Cadastrar Aluno</Heading>
              </Box>

              <Form>
                <FormField
                  name="Nome"
                  label="Nome"
                  value={aluno}
                  onChange={e => this.setState({ aluno: e.target.value })}
                />
                <Box justify="center" pad="large" margin="large">
                  <Text
                    style={{
                                    padding: '2rem',
                                    fontWeight: 'bold',
                                    fontSize: '2rem',
                                    lineHeight: 1.2
                                }}
                  >
                                Documentos Necessarios:
                  </Text>

                  <Box pad="small" style={styles.checkbox}>
                    <CheckBox
                      label="Certidão de Nascimento"
                      checked={certidaoNascimento}
                      onChange={event =>
                                        this.setState({ certidaoNascimento: event.target.checked })
                                    }
                    />
                  </Box>

                  <Box pad="small" style={styles.checkbox}>
                    <CheckBox
                      label="Comprovante de Endereço (cidade ou fazenda)"
                      checked={comprovanteEndereco}
                      onChange={event =>
                                        this.setState({ comprovanteEndereco: event.target.checked })
                                    }
                    />
                  </Box>
                  <Box pad="small" style={styles.checkbox}>
                    <CheckBox
                      label="Carteira de Vacina"
                      checked={carteiraVacina}
                      onChange={event =>
                                        this.setState({ carteiraVacina: event.target.checked })
                                    }
                    />
                  </Box>
                  <Box pad="small" style={styles.checkbox}>
                    <CheckBox
                      label="Transferência"
                      checked={transferencia}
                      onChange={event =>
                                        this.setState({
                                            transferencia: event.target.checked,
                                            declaracaoTransferencia: event.target.checked
                                        })
                                    }
                    />
                  </Box>
                  <Box pad="small" style={styles.checkbox}>
                    <CheckBox
                      label="Declaração de Transferência"
                      checked={declaracaoTransferencia}
                      onChange={event =>
                                        this.setState({
                                            declaracaoTransferencia: event.target.checked
                                        })
                                    }
                    />
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={this.verifica}
                    onSubmit={this.verifica}
                    label="Salvar"
                    icon={<Checkmark color="green" />}
                    style={{ backgroundColor: '#2ecc71', color: 'white' }}
                  />
                </Box>
              </Form>
            </Box>
          </Grommet>
        );
    }
}
