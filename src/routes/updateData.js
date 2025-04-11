import connection from '../connection.js'

export default async function updateData(req, res) {
  const { sex, civil_state, profession, neighborhood, city, state, street, street_number } = req.body
  const { susCode } = req.params

  const query = `UPDATE users SET sex = '${sex}', civil_state = '${civil_state}', profession = '${profession}', neighborhood = '${neighborhood}', city = '${city}', state = '${state}', street = '${street}', street_number = '${street_number}' WHERE sus4_code = ${susCode}`

  try {
    connection.query(query)
    res.status(201).send({ menssage: "User data updated!" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ menssage: "Internal Server Error."})
  }
}