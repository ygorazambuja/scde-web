import React, { Component } from 'react';
import {
  Grommet, grommet, Box, Button, Form, FormField, TextInput, TextArea
} from 'grommet';

import ReactDOM from 'react-dom';
import CancelamentoPdf from './CancelamentoPdf';

export default class CancelamentoMatricula extends Component {
  state = {
    nomeDoResponsavel: '',
    rg: '',
    orgaoExpedidor: '',
    cpf: '',
    motivos: '',
    dia: new Date().getDate(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear(),
    nomeDoAluno: ''
  };

  handleNomeChange = evt => this.setState({ nomeDoResponsavel: evt.target.value });

  handleRg = evt => this.setState({ rg: evt.target.value });

  handleOrgaoExpedidor = evt => this.setState({ orgaoExpedidor: evt.target.value });

  handleCpf = evt => this.setState({ cpf: evt.target.value });

  handleMotivos = evt => this.setState({ motivos: evt.target.value });

  handleAlunoChange = evt => this.setState({ nomeDoAluno: evt.target.value });

  componentDidMount = () => {
  };

  render() {
    const {
      nomeDoResponsavel, rg, motivos, cpf, orgaoExpedidor, nomeDoAluno
    } = this.state;
    return (
      <Grommet theme={grommet}>
        <Box justify="center">
          <Form>
            <FormField label="Nome do Responsável">
              <TextInput
                placeholder="digite aqui !"
                value={nomeDoResponsavel}
                onChange={this.handleNomeChange}
              />
            </FormField>
            <FormField label="Nome do Aluno">
              <TextInput
                placeholder="digite aqui!"
                value={nomeDoAluno}
                onChange={this.handleAlunoChange}
              />
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
            onClick={() => { ReactDOM.render(<CancelamentoPdf {...this.state} />, document.getElementById('root')); }}
          />
        </Box>
      </Grommet>
    );
  }
}
