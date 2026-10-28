const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Node.js',
    empresa: 'TechNova',
    localizacao: 'Lisboa (Híbrido)',
    matchIdeal: ['Node.js', 'Express', 'Trabalho em Equipe'],
  },
  {
    id: 2,
    titulo: 'Designer UX/UI',
    empresa: 'Criativa Studio',
    localizacao: 'Remoto',
    matchIdeal: ['Figma', 'Pesquisa com Utilizadores', 'Comunicação'],
  },
  {
    id: 3,
    titulo: 'Analista de Dados',
    empresa: 'DataPrime',
    localizacao: 'Porto',
    matchIdeal: ['SQL', 'Python', 'Pensamento Analítico'],
  },
];

app.get('/api/vagas', (req, res) => {
  res.status(200).json({ status: 'sucesso', vagas });
});

app.use((req, res) => {
  res.status(404).json({ status: 'erro', mensagem: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor TalentBridge a correr em http://localhost:${PORT}`);
});
