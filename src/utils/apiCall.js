import axios from 'axios'
import {Alert} from 'react-native'

export function CallApi (url, type = 'get', data = {}, header = []) {
  let reqHeader = Object.assign(header, {'Accept': 'application/json'})
  console.log('CALLING ', type, ' Url------>', url, '-----with data------>', data, '----with header--->', header)
  if (type === 'get') {
    return axios.get(url, {headers: reqHeader})
      .then((response) => {
        console.log('RESPONSE ', type, ' Url------>', url, '-----with data------>', response.data)
        return Promise.resolve(response.data)
      })
      .catch((err) => {
        console.log('ERROR ', type, ' Url------>' + url + '-->error----->', err)
        if (err.message === 'Network Error') {
          return Promise.reject('NetworkError')
        } else {
          return Promise.reject(err.response.status)
        }
      })
  } else if (type === 'post') {
    return axios.post(url, data, {headers: reqHeader})
      .then((response) => {
        console.log('RESPONSE ', type, ' Url------>', url, '-----with data------>', response.data)
        return Promise.resolve(response.data)
      })
      .catch((err) => {
        console.log('ERROR ', type, ' Url------>' + url + '-->error----->', err)
        if (err.message === 'Network Error') {
          return Promise.reject('NetworkError')
        } else {
          return Promise.reject(err.response.status)
        }
      })
  } else if (type === 'put') {
    return axios.put(url, data, {headers: reqHeader})
      .then((response) => {
        console.log('RESPONSE ', type, ' Url------>', url, '-----with data------>', response.data)
        return Promise.resolve(response)
      })
      .catch((err) => {
        console.log('ERROR ', type, ' Url------>' + url + '-->error----->', err)
        switch (err.response.data.status_code) {
          case 401:
            return Promise.reject(err.response.data.data)
          case 409:
            return Promise.reject(err.response.data.data)
          default:
            return Promise.reject(err)
        }
      })
  }
}

export function showAlert (alertText) {
  Alert.alert('lead App',
    alertText,
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ],
    { cancelable: false }
  )
}
