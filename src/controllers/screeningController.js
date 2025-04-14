import connection from "../connection.js"
import { generateScreening } from "../utils/generate-screening.js"

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

    const screening = await generateScreening(age, allergies, userFeelings)

    res.status(200).send({ name, screening })
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error" })
  }
}