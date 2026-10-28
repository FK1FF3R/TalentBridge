# Critérios de Matchmaking - TalentBridge

Esta documentação define como os perfis devem ser avaliados pelo motor de recomendação.

## 1. Hard Skills (Peso: 60%)
- Compara as tecnologias pedidas na vaga com as do candidato.
- **Pontuação Proporcional:** A pontuação é calculada de forma proporcional (ex: se a vaga pede 4 requisitos e o candidato tem 2, ele recebe 50% da pontuação total deste bloco).
- **Correspondência Parcial:** Tecnologias similares (ex: a vaga pede React, mas o candidato tem Vue.js) garantem metade (50%) dos pontos daquele requisito específico.

## 2. Soft Skills e Comportamento (Peso: 30%)
- Analisa traços como liderança, resiliência e trabalho em equipe.
- **Correspondência Exata:** Se o traço cultural da empresa bater exatamente com o perfil do candidato = 100% dos pontos do traço.
- **Correspondência Relacionada:** Se o candidato possuir uma soft skill complementar ou similar à exigida (ex: a vaga pede "Trabalho em Equipe" e o candidato tem "Liderança"), ele recebe 50% dos pontos daquele traço.

## 3. Geolocalização (Peso: 10%)
- Vagas remotas: Match automático (100% neste critério).
- Vagas presenciais/híbridas: Se o candidato morar na mesma cidade = pontuação máxima. Fora da cidade = 0%.