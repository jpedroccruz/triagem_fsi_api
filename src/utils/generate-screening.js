import OpenAI from "openai"
import dotenv from 'dotenv'

dotenv.config()

export async function generateScreening(age, allergies, userFeelings) {
  const prompt = `
    Você é um profissional de saúde experiente. Sua tarefa é classificar o risco de um paciente com base em seus sintomas descritos em linguagem natural. 
    Classifique usando APENAS uma das quatro categorias: EMERGÊNCIA, URGENTE, POUCO URGENTE ou NÃO URGENTE.

    Use o seguinte critério:
    - EMERGÊNCIA: risco de morte iminente ou sintomas muito graves (ex: dor intensa no peito, dificuldade de respirar, desmaios);
    - URGENTE: sintomas sérios que requerem atendimento rápido, mas sem risco imediato de vida (ex: febre alta, vômitos persistentes);
    - POUCO URGENTE: sintomas incômodos, mas que podem esperar (ex: dor moderada, mal-estar);
    - NÃO URGENTE: sintomas leves ou comuns (ex: coriza, leve dor de cabeça, cansaço leve).

    Seja objetivo. Retorne SOMENTE o nome da categoria.

    Idade do paciente: ${age}
    Alergias: ${allergies}
    Sintomas / O que o paciente está sentindo: ${userFeelings}
  `
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      { role: "assistant", content: "You are a renowned doctor" },
      { role: "user", content: prompt }
    ],
  })

  return response.choices[0].message.content
}