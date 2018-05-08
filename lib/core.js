import axios from 'axios'
import config from '../config/config'
import { knowsAuth } from 'watchout-common-functions/interfaces'

axios.defaults.baseURL = config.coreBaseURL

export function createLineChartSpeech(speechTarget, points) {
  const keys = ['x', 'y', 'label']
  const dataPoints = points.map(function(point) {
    return keys.reduce(function(r, key) {
      r[key] = point[key]
      return r
    }, {})
  })
  const token = knowsAuth.methods.getTokenCookie()
  const args = {
    url: '/persona/speeches',
    method: 'post',
    headers: {
      Authorization: token
    },
    data: {
      persona_speech_target_id: speechTarget.id,
      type: speechTarget.type,
      content: 'musouIsGood',
      data: {
        dataPoints
      }
    }
  }
  return axios.request('/persona/speeches', args)
}
