const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Charlie', nota: 7 },
    { nome: 'Diana', nota: 6 },
    { nome: 'Eva', nota: 9 },
  ];
  
  function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  const aprovados = alunosAprovados(alunos);
  
  console.log(aprovados);
  