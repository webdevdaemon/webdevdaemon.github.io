
import axios from 'axios'
import fetch from 'node-fetch'

const nodeAPI = fetch('https://nodejs.org/dist/latest-v6.x/docs/api/all.json')

  const ndb = (async () => await nodeAPI
  .then((res) => res.json()) /*?*/
      .then(json => {json})
  )() //? {$}

const codepenAPI = axios('http://cpv2api.com/collection/XvKdxQ')
  .then(response => response.data) //?