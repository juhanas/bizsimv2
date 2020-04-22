import { API } from 'aws-amplify'
import { LoginDetails } from '../features/Auth/authTypes'

export const callApi = (
  auth: LoginDetails,
  apiName: string,
  method: string,
  body: object,
  queryStringParameters: object,
): any => {
  const path = `/${apiName}`
  const myInit = {
    body,
    queryStringParameters,
    headers: {
      Authorization: auth?.signInUserSession.idToken.jwtToken,
      Authorization2: auth?.signInUserSession.accessToken.jwtToken,
      'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }
  switch (method) {
    case 'get': {
      return API.get(apiName, path, myInit)
    }
    case 'post': {
      return API.post(apiName, path, myInit)
    }
    case 'default': {
      throw 'Unknown method'
    }
  }
}
