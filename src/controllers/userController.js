import connection from '../connection.js'

export async function getUserData(req, res) {
  const { susCode } = req.query

  try {
    const query = `SELECT name, born_at, sex, color, civil_state, profession, city, neighborhood, state, street, street_number FROM users WHERE sus_code = ${susCode}`
    const [ result ] = await connection.query(query)
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error."})
  }
}

export async function updateUserData(req, res) {
  const { sex, civil_state, profession, neighborhood, city, state, street, street_number } = req.body
  const { susCode } = req.query

  const query = `UPDATE users SET sex = '${sex}', civil_state = '${civil_state}', profession = '${profession}', neighborhood = '${neighborhood}', city = '${city}', state = '${state}', street = '${street}', street_number = '${street_number}' WHERE sus_code = ${susCode}`

  try {
    await connection.query(query)
    res.status(201).send({ menssage: "User data updated!" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error."})
  }
}