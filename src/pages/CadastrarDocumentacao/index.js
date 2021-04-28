import React, { useState } from 'react';
import { Box, Form, FormField, Button, Heading, CheckBox, Text } from 'grommet';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Checkmark, FormPreviousLink } from 'grommet-icons';
import api from '../../services/api';

const INITIAL_STATE = {
  aluno: '',
  sgde: '',
  certidaoNascimento: false,
  comprovanteEndereco: false,
  carteiraVacina: false,
  transferencia: false,
  declaracaoTransferencia: false,
  cartaoSus: false,
};

const CadastrarDocumentacao = () => {
  const [data, setData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const salva = () => {
    setLoading(true);
    api
      .post('/alunos', { ...data })
      .then(() => {
        setData(INITIAL_STATE);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setIsError(true);
        setInterval(() => {
          setIsError(false);
        }, 5000);
      });
  };

  const verifica = () => {
    salva();
  };
  return (
    <Box align="center" justify="center" gap="medium" margin="large">
      <Box align="center" direction="row" justify="center" gap="medium">
        <Box>
          <Link to="/documentacao">
            <Button>
              <FormPreviousLink size="large" />
            </Button>
          </Link>
        </Box>
        <Heading>Cadastrar Aluno</Heading>
      </Box>
      <Box>
        {loading && (
          <Box justify="center" align="center">
            <HashLoader size={100} sizeUnit="px" css="margin-bottom: 100px;" />
          </Box>
        )}
        {isError && (
          <Box justify="center" align="center">
            <Text size="medium" color="primary">
              Ocorreu algum problema
            </Text>
          </Box>
        )}
        <Form>
          <FormField
            name="Nome"
            label="Nome"
            value={data.aluno}
            onChange={(e) => setData({ ...data, aluno: e.target.value })}
          />
          <FormField
            name="Código SGDE"
            label="Código SGDE"
            value={data.sgde}
            onChange={(e) => setData({ ...data, sgde: e.target.value })}
          />
          <Box justify="center" pad="medium" margin="medium">
            <Heading size={20}>Documentos Necessarios:</Heading>
            <Box pad="small">
              <CheckBox
                label="Certidão de Nascimento"
                checked={data.certidaoNascimento}
                onChange={(event) =>
                  setData({
                    ...data,
                    certidaoNascimento: event.target.checked,
                  })
                }
              />
            </Box>

            <Box pad="small">
              <CheckBox
                label="Comprovante de Endereço (cidade ou fazenda)"
                checked={data.comprovanteEndereco}
                onChange={(event) =>
                  setData({
                    ...data,
                    comprovanteEndereco: event.target.checked,
                  })
                }
              />
            </Box>
            <Box pad="small">
              <CheckBox
                label="Carteira de Vacina"
                checked={data.carteiraVacina}
                onChange={(event) =>
                  setData({
                    ...data,
                    carteiraVacina: event.target.checked,
                  })
                }
              />
            </Box>
            <Box pad="small">
              <CheckBox
                label="Transferência"
                checked={data.transferencia}
                onChange={(event) =>
                  setData({
                    ...data,
                    transferencia: event.target.checked,
                    declaracaoTransferencia: event.target.checked,
                  })
                }
              />
            </Box>
            <Box pad="small">
              <CheckBox
                label="Declaração de Transferência"
                checked={data.declaracaoTransferencia}
                onChange={(event) =>
                  setData({
                    ...data,
                    declaracaoTransferencia: event.target.checked,
                  })
                }
              />
            </Box>
          </Box>
          <Box>
            <Button
              onClick={verifica}
              onSubmit={verifica}
              label="Salvar"
              primary
              size="large"
              icon={<Checkmark color="green" />}
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default CadastrarDocumentacao;
