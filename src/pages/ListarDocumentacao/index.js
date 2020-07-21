import React, { Component, useState, useEffect } from 'react';

import { Box, Button, Heading } from 'grommet';

import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import AlunoDoc from '../../components/AlunoDoc';

const ListarDocumentacao = () => {
  const [alunos, setAlunos] = useState([]);

    const fetchDocumentacao = async () => {
        const result = await api.get('/documentacao');
        setAlunos(result.data);
    };

    useEffect(() => {
      fetchDocumentacao();
    }, [0]);
  return (
    <>
      <Box direction="column" align="center" pad="small">
        <Box direction="row" align="center" gap="medium" justify="between">
          <Box
            direction="row"
          >
            <Link to="/documentacao">
              <Button>
                <FormPreviousLink size="large" />
              </Button>
            </Link>
          </Box>
          <Box align="center" justify="center">
            <Heading>Devendo documentação</Heading>
          </Box>
        </Box>

        <Box gap="small">
          {alunos.map(aluno => (
                            //  eslint-disable-next-line no-underscore-dangle
            <AlunoDoc data={aluno} key={aluno._id} />
                         ))}
        </Box>
      </Box>
    </>
  );
};

export default ListarDocumentacao;


// export default class ListarDocumentacao extends Component {
//     state = {
//         alunos: []
//     };

//     componentWillMount = () => {
//         this.fetchDocumentacao();
//     };

//     fetchDocumentacao = async () => {
//         const result = await api.get('/documentacao');
//         this.setState({ alunos: [...result.data] });
//     };

//     render() {
//         const { alunos } = this.state;
//         return (
//           <>
//             <Box direction="column" style={{ alignItems: 'center' }} pad="small">
//               <Box direction="row" align="center">
//                 <Box
//                   direction="row"
//                   border={{ color: 'brand', size: 'small', style: 'dashed' }}
//                   pad="small"
//                   style={{ marginRight: 10 }}
//                   round
//                 >
//                   <Link to="/documentacao">
//                     <Button>
//                       <FormPreviousLink />
//                     </Button>
//                   </Link>
//                 </Box>
//                 <Box align="center" justify="center">
//                   <Heading>Devendo documentação</Heading>
//                 </Box>
//               </Box>

//               <Box>
//                 {alunos.map(aluno => (
//                             // eslint-disable-next-line no-underscore-dangle
//                   <AlunoDoc data={aluno} key={aluno._id} />
//                         ))}
//               </Box>
//             </Box>
//           </>
//         );
//     }
// }
