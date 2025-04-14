import connection from "../connection.js"
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

export default async function continueScreening(req, res) {
  const { susCode } = req.query
  const { userFeelings } = req.body
  let { allergies } = req.query

  if (!allergies) allergies = 'Nenhuma'

  try {
    const [ result ] = await connection.query(`SELECT name, born_at FROM users WHERE sus_code = ${susCode}`)
    
    const name = result[0].name
    
    let born_at = `${result[0].born_at}`
    born_at = born_at.slice(11, 15)
    born_at = Number(born_at)
    
    const currentYear = Number((new Date).getFullYear())
    
    const age = currentYear - born_at

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

    res.status(200).send({ name, screening: response.choices[0].message.content })
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error" })
  }
}