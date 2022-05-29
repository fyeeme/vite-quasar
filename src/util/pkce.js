/**
 * Based on spec: https://tools.ietf.org/html/rfc7636#section-4
 * Uses: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
 * Ref: https://www.valentinog.com/blog/oauth2/
 */
import { nanoid } from 'nanoid'
import CryptoJS from 'crypto-js'


const base64encode = (value) => value.toString(CryptoJS.enc.Base64)
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')

const generateCodeVerifier = (length) => {
  if (length < 43 || length > 128) {
    throw new Error('Code verifier length must be more than 42 and less than 129.')
  }
  return nanoid(128)
}

const generateCodeChallenge = (date, transformation = 'S256') => {
  if (transformation === 'plain') {
    console.warn('It is not recommended to use a "plain" transformation.')
    return data
  }
  return base64encode(CryptoJS.SHA256(data))
}

/**
 *
 * Test
 *
 */

(() => {
  const code_verifier = generateCodeVerifier(128)
  const code_challenge_plain = generateCodeChallenge(code_verifier, 'plain')
  const code_challenge_s256 = generateCodeChallenge(code_verifier)

  console.log({ code_verifier })
  console.log({ code_challenge_plain })
  console.log({ code_challenge_s256 })

  localStorage.setItem('oidc', JSON.stringify({ code_verifier }))
  alert(`code_verifier ${code_verifier} set in storage. Will clear in 15 seconds.`)
  setTimeout(clearStorage, 15000)
})()

export default generateCodeChallenge