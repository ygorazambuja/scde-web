import React from 'react';
import PropTypes from 'prop-types';

import {
  PDFViewer, Document, View, Text, Image, Page, StyleSheet
} from '@react-pdf/renderer';
import brasao from '../images/brasao.png';

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

const Header = () => (
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
);

const Footer = ({ dia, mes, ano }) => {
  const corrigeDatas = () => {
    const mesesArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mesesArray[mes];
  };
  const mesString = corrigeDatas();

  return (
    <View>
      <Text style={{ marginTop: 50, fontSize: 14 }}>
        Nestes termos, Pede e espera DEFERIMENTO.
      </Text>
      <Text style={{ marginTop: 20, fontSize: 14 }}>
        {`Pedro Gomes - MS, ${dia} de ${mesString} de ${ano}`}
      </Text>
      <View style={styles.final}>
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          ___________________________________________
        </Text>
        <Text style={{ textAlign: 'center' }}>Assinatura do(a) requerente</Text>
      </View>
    </View>
  );
};

const Body = ({
  nomeDoResponsavel, rg, orgaoExpedidor, cpf, nomeDoAluno
}) => (
    <View>
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
    </View>
  );


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
          <Header />
          <Body
            nomeDoResponsavel={nomeDoResponsavel}
            rg={rg}
            orgaoExpedidor={orgaoExpedidor}
            cpf={cpf}
            nomeDoAluno={nomeDoAluno}
          />
          <View>
            <Text style={{ marginTop: 20 }}>{motivos}</Text>
          </View>


          <Footer dia={dia} mes={mes} ano={ano} />
        </Page>
      </Document>
    </PDFViewer>
  );

MyDocument.propTypes = {
  nomeDoResponsavel: PropTypes.string.isRequired,
  rg: PropTypes.string.isRequired,
  orgaoExpedidor: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  motivos: PropTypes.string.isRequired,
  dia: PropTypes.number.isRequired,
  mes: PropTypes.number.isRequired,
  ano: PropTypes.number.isRequired,
  nomeDoAluno: PropTypes.string.isRequired
};

Footer.propTypes = {
  dia: PropTypes.number.isRequired,
  mes: PropTypes.number.isRequired,
  ano: PropTypes.number.isRequired,
};

Body.propTypes = {
  nomeDoResponsavel: PropTypes.string.isRequired,
  rg: PropTypes.string.isRequired,
  orgaoExpedidor: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  nomeDoAluno: PropTypes.string.isRequired
};


export default MyDocument;
