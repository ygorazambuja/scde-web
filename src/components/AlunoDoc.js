import React, { useState, useEffect } from 'react';
import {
 Text, Box, CheckBox, Button 
} from 'grommet';
import api from '../services/api';

const INITIAL_STATE = {
  aluno: '',
  carteiraVacina: false,
  certidaoNascimento: false,
  comprovanteEndereco: false,
  createdAt: null,
  declaracaoTransferencia: false,
  transferencia: false,
  cartaoSus: false,
  updatedAt: null,
  _id: ''
};

const AlunoDoc = ({ data }) => {
  const [aluno, setAluno] = useState(INITIAL_STATE);
 
  useEffect(() => {
    setAluno(data);
  }, [data]);

  const updateDocumentos = () => {
          api
            .put('/documentacao', { ...aluno })
            .then(() => {
              // TODO:
            }).catch(() => {
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
          <Text weight="bold">
            Cod SGDE: 1212412
          </Text>
        </Box>
        <Box margin="small">
          <CheckBox label="Certidão de Nascimento" checked={aluno.certidaoNascimento} value={aluno.certidaoNascimento} onChange={e => setAluno({ ...aluno, certidaoNascimento: e.target.checked })} />
          <CheckBox label="Comprovante Endereço" />
          <CheckBox label="Carteira de Vacina" />
          <CheckBox label="Declaração de Transferência" />
          <CheckBox label="Cartao do Sus" />
        </Box>
        <Box>
          <Button primary gap="medium" pad="medium" label="Salvar Alterações ? " onClick={updateDocumentos} alignSelf="center" />
        </Box>
      </Box>
    </Box>
  );
};

export default AlunoDoc;

// export default class AlunoDoc extends Component {
//   state = {
//     ...INITIAL_STATE
//   };

//   updateDocumentos = async () => {
//     const aux = { ...this.state };
//     console.log(aux);
//     api
//       .put('/documentacao', { ...this.state })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//   };

//   componentDidMount = () => {
//     this.setState({ ...this.data.data });
//   };

//   render() {
//     return (
//       <Box direction="column" round border align="center">
//         <Box direction="row">
//           <Box pad="large" align="center">
//             <Text>{this.state.aluno}</Text>
//           </Box>
//           <Box pad="large">
//             <CheckBox
//               label="Certidão Nascimento"
//               checked={this.state.certidaoNascimento}
//               value={this.state.certidaoNascimento}
//               onChange={e =>
//                 this.setState({ certidaoNascimento: e.target.checked })
//               }
//             />
//             <CheckBox
//               label="Comprovante Endereço"
//               checked={this.state.comprovanteEndereco}
//               value={this.state.comprovanteEndereco}
//               onChange={e =>
//                 this.setState({ comprovanteEndereco: e.target.checked })
//               }
//             />
//             <CheckBox
//               label="Carteira Vacina"
//               checked={this.state.carteiraVacina}
//               value={this.state.carteiraVacina}
//               onChange={e =>
//                 this.setState({ carteiraVacina: e.target.checked })
//               }
//             />
//             <CheckBox
//               label="Declaração Transferencia"
//               checked={this.state.declaracaoTransferencia}
//               value={this.state.declaracaoTransferencia}
//               onChange={e =>
//                 this.setState({ declaracaoTransferencia: e.target.checked })
//               }
//             />
//             <CheckBox
//               label="Transferencia"
//               checked={this.state.transferencia}
//               value={this.state.transferencia}
//               onChange={e => this.setState({ transferencia: e.target.checked })}
//             />
//           </Box>
//         </Box>
//         <Box>
//           <Button gap="medium" pad="medium" onClick={this.updateDocumentos}>
//             <Text>Salvar Alterações ?</Text>
//             <Checkmark />
//           </Button>
//         </Box>
//       </Box>
//     );
//   }
// }
