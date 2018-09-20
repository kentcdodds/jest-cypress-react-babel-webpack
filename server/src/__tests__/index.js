// this isn't necessarily an example of a well-written test
// I just wanted to have something that I could use to write the server
// faster and make sure I don't break things as I go.
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
  // can register
  const {
    data: {user: registeredUser},
  } = await api.post('register', testUser)
  expect(registeredUser).toEqual({
    ...testUser,
    token: expect.any(String),
  })

  // can login
  const {
    data: {user},
  } = await api.post('login', testUser)
  expect(user).toEqual({
    ...testUser,
    token: expect.any(String),
  })

  // can get /me
  const {data: meUser} = await api({
    url: 'me',
    method: 'GET',
    headers: {Authorization: `Bearer ${user.token}`},
  })
  const {token: ignoredToken, ...userWithoutToken} = user
  expect(meUser).toEqual(userWithoutToken)

  // can set user data
  const updates = {anything: 'goes'}
  const {data: meUserUpdated} = await api({
    url: 'me',
    method: 'POST',
    headers: {Authorization: `Bearer ${user.token}`},
    data: updates,
  })
  expect(meUserUpdated).toMatchObject({
    ...userWithoutToken,
    ...updates,
  })

  // can logout
  await api({
    url: 'logout',
    method: 'GET',
    headers: {Authorization: `Bearer ${user.token}`},
  })

  const meError = await api.get('me').catch(e => e.response)
  expect(meError.status).toEqual(400)
  done()
})
