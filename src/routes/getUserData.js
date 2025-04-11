import connection from '../connection.js'

export default async function getUserData(req, res) {
  const { susCode } = req.params

  try {
    const query = `SELECT name, born_at, sex, color, civil_state, profession, city, neighborhood, state, street, street_number FROM users WHERE sus_code = ${susCode}`
    const [ result ] = await connection.query(query)
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error."})
  }
}