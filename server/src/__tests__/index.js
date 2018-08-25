// this isn't necessarily an example of a well-written test
// the whole server is pretty contrived. Keep that in mind :)
const {start} = require('..')
const axios = require('axios')

let baseURL, api, server

beforeAll(async done => {
  server = await start({port: 8765})
  baseURL = `http://localhost:${server.address().port}/`
  api = axios.create({baseURL})
  done()
})

afterAll(async done => {
  await server.close()
  done()
})

test('the server works', async done => {
  const testUser = {name: 'test'}
  const {
    data: {user},
  } = await api.post('login', testUser)
  expect(user).toEqual({
    ...testUser,
    token: expect.any(String),
  })
  const {data: meUser} = await api({
    url: 'me',
    method: 'GET',
    headers: {Authorization: `Bearer ${user.token}`},
  })
  // eslint-disable-next-line no-unused-vars
  const {token, ...userWithoutToken} = user
  expect(meUser).toEqual(userWithoutToken)

  await api({
    url: 'logout',
    method: 'GET',
    headers: {Authorization: `Bearer ${user.token}`},
  })

  const meError = await api.get('me').catch(e => e.response)
  expect(meError.status).toEqual(400)
  done()
})
