/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
 Box, Heading, TextInput, Button, Text, Form 
} from 'grommet';
import { Link } from 'react-router-dom';
import { FormPreviousLink } from 'grommet-icons';
import { HashLoader } from 'react-spinners';
import Aluno from '../../components/Aluno';
import api from '../../services/api';

const Busca = () => {
    const [nameInput, setNameInput] = useState('');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alunos, setAlunos] = useState({});

    const fetchAlunosFromWeb = () => {
        api.get('/alunos')
            .then((res) => {
                setAlunos(res.data);
                setIsLoading(false);
                const alunosString = res.data;
                localStorage.setItem(
                    '@scde:alunos',
                    JSON.stringify(alunosString)
                );
            })
            .catch(() => {});
    };

    const fetchAlunosFromLocalStorage = () => {
        const alunosString = localStorage.getItem('@scde:alunos');
        if (alunosString) {
            const alunosParsed = JSON.parse(alunosString);
            setIsLoading(false);
            setAlunos(alunosParsed);
        } else {
            fetchAlunosFromWeb();
        }
    };

    const fetchAlunosFromLocalStorageOrWeb = () => {
        fetchAlunosFromLocalStorage();
    };

    const filterAlunos = (e) => {
        e.preventDefault();
        if (nameInput.trim().length !== 0) {
          const filtro = alunos.filter((aluno) => {
            const regex = new RegExp(nameInput, 'gi');
            return regex.test(aluno.nome);
        });
        setDadosFiltrados(filtro);
        }
    };

    const listRender = nameInput.trim() && (
    <Box pad="small">
      {dadosFiltrados.map(aluno => (
                // eslint-disable-next-line no-underscore-dangle
        <Aluno key={aluno._id} {...aluno} />
            ))}
    </Box>
    );

    useEffect(() => {
        fetchAlunosFromLocalStorageOrWeb();
    }, []);

    useEffect(() => {
      if (nameInput === '') setDadosFiltrados([]);
    }, [nameInput]);
    return (
      <Box align="center" pad="small" direction="column">
        <Box direction="row" justify="between" align="center" pad="large" gap="large">
          <Link to="/">
            <Button label="" icon={<FormPreviousLink size="30px" />} />
          </Link>
          <Heading>Alunos Antigos</Heading>     
        </Box>
        <Box margin="large">
          <Form onSubmit={filterAlunos}>
            <TextInput
              style={{ borderColor: '#7D4CDB' }}
              placeholder="Pesquise Aqui !"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
            />
          </Form>
        </Box>
        

        {isLoading && (
        <HashLoader
          size={100}
          sizeUnit="px"
          css="margin-bottom: 100px;"
        />
            )}
        <Box>{listRender}</Box>

        {!dadosFiltrados.length && (
        <Box alignContent="center" justify="center">
          <Text size="large" align="center">
            <strong style={{ color: '#7D4CDB' }}>Carregando</strong>
            <br />
            Para começar, digite algum
            <strong style={{ color: '#7D4CDB' }}> nome!</strong>
            <strong> e tecle ENTER</strong>
          </Text>
        </Box>
            )}
      </Box>
    );
};

export default Busca;

// export default class Busca extends Component {
//   state = {
//     inputNome: '',
//     isLoading: true,
//     alunos: [],
//     dadosFiltrados: []
//   };

//   componentWillMount = () => {
//     this.fetchAlunosFromLocalStorageOrWeb();
//   };

//   fetchAlunosFromLocalStorageOrWeb = () => {
//     this.fetchAlunosFromLocalStorage();
//   };

//   fetchAlunosFromLocalStorage = () => {
//     const alunosString = localStorage.getItem('@scde:alunos');
//     if (alunosString) {
//       const alunos = JSON.parse(alunosString);
//       this.setState({ isLoading: false });
//       this.setState({ alunos });
//     } else {
//       this.fetchAlunosFromWeb();
//     }
//   };

//   fetchAlunosFromWeb = () => {
//     api.get('/alunos')
//       .then((res) => {
//         this.setState({ alunos: res.data, isLoading: false });
//         const alunosString = res.data;
//         localStorage.setItem('@scde:alunos', JSON.stringify(alunosString));
//       })
//       .catch(() => { });
//   };

//   filterAlunos = (e) => {
//     e.preventDefault();
//     const { alunos, inputNome } = this.state;
//     const dadosFiltrados = alunos.filter((aluno) => {
//       const regex = new RegExp(inputNome, 'gi');
//       return regex.test(aluno.nome);
//     });
//     this.setState({ dadosFiltrados });
//   };

//   render() {
//     const { inputNome, isLoading, dadosFiltrados } = this.state;

//     const listRender = inputNome.trim() && (
//       <Box pad="small">
//         {dadosFiltrados.map(aluno => (
//           // eslint-disable-next-line no-underscore-dangle
//           <Aluno key={aluno._id} {...aluno} />
//         ))}
//       </Box>
//     );

//     return (
//       <>
//         <Box align="center">
//           <Box direction="row" align="center" justify="center">
//             <Box border round style={{ borderColor: '#7D4CDB', marginRight: '2em' }}>
//               <Link to="/">
//                 <Button label="" icon={<FormPreviousLink />} />
//               </Link>
//             </Box>

//             <Heading>Buscar Alunos</Heading>
//           </Box>
//           <Form onSubmit={this.filterAlunos}>
//             <TextInput
//               style={{ borderColor: '#7D4CDB' }}
//               placeholder="Pesquise Aqui !"
//               value={inputNome}
//               onChange={e => this.setState({ inputNome: e.target.value })}
//             />
//           </Form>
//         </Box>
//         {listRender}
//         {!dadosFiltrados.length && (
//           <Box style={{ alignItems: 'center', marginTop: '4em' }}>
//             {isLoading && (
//               <HashLoader size={100} sizeUnit="px" css="margin-bottom: 100px;" />
//             )}
//             <Text size="large" align="center">
//               <strong style={{ color: '#7D4CDB' }}>Carregando</strong>
//               <br />
//               Para começar, digite algum
//               <strong style={{ color: '#7D4CDB' }}> nome!</strong>
//               <strong> e tecle ENTER</strong>
//             </Text>
//           </Box>
//         )}
//       </>
//     );
//   }
// }
