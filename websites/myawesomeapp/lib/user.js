import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import { deta } from './db';
import { appConfig } from './appconfig'
const userStorage = deta.Base('userStorage');

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */
export async function createUser({ username, password, role = appConfig.role_type__ADMIN }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')

  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
    role: role
  }

  // This is an in memory store for users, there is no data persistence without a proper DB
  const newUser = await userStorage.put(user)

  return { username, role, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  
  // example of full output in `static/docs/user-auth.md#findUser`
  const { items } = await userStorage.fetch({'username': username});
  if(items[0].username === process.env.DEFAULT_ADMIN_USERNAME) {
    console.log('hi admin')
  }

  return items[0]
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}
