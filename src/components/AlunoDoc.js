import React, { useState, useEffect } from 'react';
import { Text, Box, CheckBox, Button } from 'grommet';
import PropTypes from 'prop-types';
import api from '../services/api';

const INITIAL_STATE = {
  aluno: '',
  sgde: '',
  carteiraVacina: false,
  certidaoNascimento: false,
  comprovanteEndereco: false,
  createdAt: null,
  declaracaoTransferencia: false,
  transferencia: false,
  cartaoSus: false,
  updatedAt: null,
  _id: '',
};

const AlunoDoc = (data) => {
  const [aluno, setAluno] = useState(INITIAL_STATE);

  useEffect(() => {
    setAluno(data);
  }, []);

  const updateDocumentos = () => {
    api
      .put('/documentacao', { ...aluno })
      .then(() => {
        // TODO:
      })
      .catch(() => {
        // TODO:
      });
  };

  return (
    // eslint-disable-next-line no-underscore-dangle
    <Box direction="column" key={aluno._id}>
      <Box direction="column" round border pad="large">
        <Box gap="small">
          <Text weight="bold">
            Nome:
            {aluno.aluno}
          </Text>
          <Text weight="bold">Cod SGDE: {aluno.sgde}</Text>
        </Box>
        <Box margin="small">
          <CheckBox
            label="Certidão de Nascimento"
            checked={aluno.certidaoNascimento}
            value={aluno.certidaoNascimento}
            onChange={(e) =>
              setAluno({ ...aluno, certidaoNascimento: e.target.checked })
            }
          />
          <CheckBox
            label="Comprovante Endereço"
            checked={aluno.comprovanteEndereco}
            value={aluno.comprovanteEndereco}
            onChange={(e) => {
              setAluno({ ...aluno, comprovanteEndereco: e.target.checked });
            }}
          />
          <CheckBox label="Carteira de Vacina" />
          <CheckBox label="Declaração de Transferência" />
          <CheckBox label="Cartao do Sus" />
        </Box>
        <Box>
          <Button
            primary
            gap="medium"
            pad="medium"
            label="Salvar Alterações ? "
            onClick={updateDocumentos}
            alignSelf="center"
          />
        </Box>
      </Box>
    </Box>
  );
};

AlunoDoc.propTypes = {
  aluno: PropTypes.string,
  sgde: PropTypes.string,
  carteiraVacina: PropTypes.bool,
  certidaoNascimento: PropTypes.bool,
  comprovanteEndereco: PropTypes.bool,
  createdAt: null,
  declaracaoTransferencia: PropTypes.bool,
  transferencia: PropTypes.bool,
  cartaoSus: PropTypes.bool,
  updatedAt: null,
  _id: PropTypes.string,
};

export default AlunoDoc;
