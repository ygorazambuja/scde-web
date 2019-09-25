import React, { Component } from 'react';
import {
  Grommet, grommet, Box, Button, Form, FormField, TextInput, TextArea
} from 'grommet';
import {
  Page, Text, View, Document, StyleSheet, PDFViewer, Image
} from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

import brasao from '../images/brasao.png';

export default class CancelamentoMatricula extends Component {
  state = {
    nomeDoResponsavel: 'Ygor Correa Azambuja',
    rg: '2013820',
    orgaoExpedidor: 'SSP-MS',
    cpf: '04590331152',
    motivos: 'PORQUE EU QUERO PORQUE EU QUERO PORQUE EU QUERO PORQUE EU QUERO PORQUE EU QUERO',
    dia: new Date().getDay(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear(),
    nomeDoAluno: 'Izadora Venancio Paes Azambuja'
  };

  handleNomeChange = evt => this.setState({ nomeDoResponsavel: evt.target.value });

  handleRg = evt => this.setState({ rg: evt.target.value });

  handleOrgaoExpedidor = evt => this.setState({ orgaoExpedidor: evt.target.value });

  handleCpf = evt => this.setState({ cpf: evt.target.value });

  handleMotivos = evt => this.setState({ motivos: evt.target.value });

  handleAlunoChange = evt => this.setState({ nomeDoAluno: evt.target.value })


  render() {
    const {
      nomeDoResponsavel, rg, motivos, cpf, orgaoExpedidor, nomeDoAluno
    } = this.state;
    return (
      <Grommet theme={grommet}>
        <Box>
          <Form>
            <FormField label="Nome do Responsável">
              <TextInput
                placeholder="digite aqui !"
                value={nomeDoResponsavel}
                onChange={this.handleNomeChange}
              />
            </FormField>
            <FormField label="Nome do Aluno">
              <TextInput placeholder="digite aqui!" value={nomeDoAluno} onChange={this.handleAlunoChange} />
            </FormField>
            <FormField label="RG: ">
              <TextInput
                placeholder="digite aqui !"
                value={rg}
                onChange={this.handleRg}
              />
            </FormField>
            <FormField label="Orgão Expedidor: ">
              <TextInput
                placeholder="digite aqui !"
                value={orgaoExpedidor}
                onChange={this.handleOrgaoExpedidor}
              />
            </FormField>
            <FormField label="CPF: ">
              <TextInput
                placeholder="digite aqui !"
                value={cpf}
                onChange={this.handleCpf}
              />
            </FormField>
            <FormField label="Motivos: ">
              <TextArea
                placeholder="digite aqui !"
                value={motivos}
                onChange={this.handleMotivos}
              />
            </FormField>
          </Form>
        </Box>
        <Box>
          <Button
            label="Gerar! "
            onClick={() => {
              const camposDoRelatorio = {
                ...this.state
              };
              ReactDOM.render(<MyDocument {...camposDoRelatorio} />, document.getElementById('root'));
            }}
          />
        </Box>
      </Grommet>
    );
  }
}

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  cabecalho: {
    padding: 10,
    flexDirection: 'row',
    fontSize: 14,
    alignItems: 'center'
  },
  corpo: {
    textAlign: 'justify',
    margin: 20,
    lineHeight: 1.5
  },
  final: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50
  },
  deferimento: {
    marginTop: 10
  }
});

// Create Document Component
const MyDocument = ({
  nomeDoResponsavel,
  rg,
  orgaoExpedidor,
  cpf,
  motivos,
  dia,
  mes,
  ano,
  nomeDoAluno
}) => (
  <PDFViewer style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.cabecalho}>
            <Image src={brasao} style={{ width: 96, height: 96 }} />
            <View style={{ flexDirection: 'column', padding: 5 }}>
              <Text>GOVERNO DO ESTADO DE MATO GROSSO DO SUL</Text>
              <Text>SECRETARIA DE ESTADO DE EDUCAÇÃO</Text>
              <Text>ESCOLA ESTADUAL FRANCISCO RIBEIRO SOARES</Text>
              <Text>AVENIDA MANOEL ALVES DE MORAIS JUNIOR, 340.</Text>
              <Text>CEP: 79410000 - PEDRO GOMES – MS – (67) 3230-1432</Text>
            </View>
          </View>
          <Text style={{
            marginTop: 40, textAlign: 'justify', lineHeight: 1.8, fontSize: 14
          }}
          >
            Eu,
            {nomeDoResponsavel}
            , abaixo firmado com o RG:
            {rg}
            -
            {orgaoExpedidor}
            , CPF nº:
            {cpf}
            , vem pelo presente requerer a direção da escola o CANCELAMENTO da
                                matricula do aluno(a)
            {nomeDoAluno}
            , pelos motivos abaixo expostos:
          </Text>
          <Text style={{ marginTop: 20, }}>{motivos}</Text>
          <Text style={{ marginTop: 50, fontSize: 14 }}>
            Nestes termos, Pede e espera DEFERIMENTO.
          </Text>
          <Text style={{ marginTop: 20, fontSize: 14 }}>
            {`Pedro Gomes - MS, ${dia} de ${mes} de ${ano}`}
          </Text>
          <View style={styles.final}>
            <Text style={{ textAlign: 'center', marginTop: 40 }}>
              ___________________________________________
            </Text>
            <Text style={{ textAlign: 'center' }}>Assinatura do(a) requerente</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
