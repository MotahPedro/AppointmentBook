
// AlunoUseCase.mocks.js

const mockAlunoCompleto = {
  id: 1,
  matricula: '123456',
  nome: 'Maria Souza',
  email: 'maria.souza@example.com',
  senha: 'senhaSegura123',
  curso: 'Engenharia de Software',
  turma: '202411',
  periodo: '1',
  semestre: '1',
  filaDependencia: false,
  professorOrientador: { nome: 'John Doe' },
  professorOrientadorId: 1,
  trabalhos: [
    {
      tema: 'Desenvolvimento de Software',
      objetivo: 'Criar um sistema de gestão',
      questaoProblema: 'Como melhorar a eficiência do desenvolvimento de software?'
    }
  ]
};

const mockAlunoVazio = {
  matricula: '',
  nome: '',
  email: '',
  senha: '',
  curso: '',
  turma: '',
  periodo: '',
  semestre: '',
  filaDependencia: false,
  professorOrientador: { nome: '' },
  professorOrientadorId: 0,
  trabalhos: []
};

module.exports = { mockAlunoCompleto, mockAlunoVazio };