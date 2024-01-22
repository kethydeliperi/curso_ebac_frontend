"use strict";

var alunos = [{
  nome: 'Alice',
  nota: 8
}, {
  nome: 'Bob',
  nota: 5
}, {
  nome: 'Charlie',
  nota: 7
}, {
  nome: 'Diana',
  nota: 6
}, {
  nome: 'Eva',
  nota: 9
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);