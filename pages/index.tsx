import { useEffect, useState } from "react";

type Student = {
  nome: string;
  ano: number;
  serie: string;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Student[]>([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (input.length > 2) {
      fetch(`/api/aluno/${input}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }

    if (input.length === 0) {
      setData([]);
    }
  }, [input]);

  return (
    <div className="max-w-2xl mx-auto parent dark">
      <div className="relative my-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Procurar por alunos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome do Aluno
            </th>
            <th scope="col" className="px-6 py-3">
              Série
            </th>
            <th scope="col" className="px-6 py-3">
              Ano
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {aluno.nome}
              </th>
              <td className="px-6 py-4">{aluno.serie}</td>
              <td className="px-6 py-4">{aluno.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
