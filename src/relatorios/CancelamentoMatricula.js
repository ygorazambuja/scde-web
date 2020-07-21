import React, { useState } from 'react';
import {
 Box, Button, Form, FormField, TextInput, TextArea, Heading
} from 'grommet';
import { Link } from 'react-router-dom';
import { FormPreviousLink } from 'grommet-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './CancelamentoPdf';

const INITIAL_DATA = {
    nomeDoResponsavel: '',
    rg: '',
    orgaoExpedidor: '',
    cpf: '',
    motivos: '',
    dia: new Date().getDate(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear(),
    nomeDoAluno: '',
};
const CancelamentoMatricula = () => {
    const [data, setData] = useState(INITIAL_DATA);

    return (
      <Box gap="large" pad="large">
        <Box direction="row" align="center" justify="center">
          <Link to="/gerarDocumentos">
            <Button label="" icon={<FormPreviousLink size="30px" />} />
          </Link>
          <Heading textAlign="center" size="small">
            Requerimento de Cancelamento
          </Heading>
        </Box>
        <Form>
          <FormField label="Nome do Responsável">
            <TextInput
              placeholder="digite aqui !"
              value={data.nomeDoResponsavel}
              onChange={({ target }) => setData({ ...data, nomeDoResponsavel: target.value })}
            />
          </FormField>
          <FormField label="Nome do Aluno">
            <TextInput
              placeholder="digite aqui!"
              value={data.nomeDoAluno}
              onChange={({ target }) => setData({ ...data, nomeDoAluno: target.value })}
            />
          </FormField>
          <FormField label="RG: ">
            <TextInput
              placeholder="digite aqui !"
              value={data.rg}
              onChange={({ target }) => setData({ ...data, rg: target.value })}
            />
          </FormField>
          <FormField label="Orgão Expedidor: ">
            <TextInput
              placeholder="digite aqui !"
              value={data.orgaoExpedidor}
              onChange={({ target }) => setData({ ...data, orgaoExpedidor: target.value })}
            />
          </FormField>
          <FormField label="CPF: ">
            <TextInput
              placeholder="digite aqui !"
              value={data.cpf}
              onChange={({ target }) => setData({ ...data, cpf: target.value })}
            />
          </FormField>
          <FormField label="Motivos: ">
            <TextArea
              placeholder="digite aqui !"
              value={data.motivos}
              onChange={({ target }) => setData({ ...data, motivos: target.value })}
            />
          </FormField>
        </Form>
        <PDFDownloadLink document={<MyDocument {...data} />}>
          <Button primary label="Gerar !" fill="horizontal" />
        </PDFDownloadLink>
      </Box>
    );
};

export default CancelamentoMatricula;
