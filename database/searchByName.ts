import students from "./alunos-minified.json";

export function searchByName(name: string): Array<any> {
  if (!name) {
    return [];
  }

  if (name.length < 3) {
    return [];
  }

  return students.filter((student) => {
    return student.nome.toLowerCase().includes(name.toLowerCase());
  });
}
