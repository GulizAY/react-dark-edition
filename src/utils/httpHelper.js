import { urlConst } from './const'

const url = (endpoint) => {
  return urlConst.API_URL + '/' + endpoint
}

const Get = (endpoint) => {
  return fetch(url(endpoint), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    }
  })
  .then((resp) => resp.json()) // Transform the data into json
}

const Post = (endpoint, data) => {
  return fetch(url(endpoint), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    // body: JSON.stringify({
    //    userName: data.username,
    //    password: data.password,
    // })
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

const PostToken = (endpoint, data) => {
  return fetch(url(endpoint), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': 'Bearer ' + localStorage.getItem('userToken')
    },
    // body: JSON.stringify({
    //   companyId: data.companyId
    // })
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export { Get, Post, PostToken }