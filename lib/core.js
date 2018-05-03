import axios from 'axios'
import config from '../config/config'
import { knowsAuth } from 'watchout-common-functions/interfaces'

axios.defaults.baseURL = config.coreBaseURL

export function createLineChartSpeech(speechTarget, points) {
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
      content: 'meow'
    }
  }
  return axios.request('/persona/speeches', args)
}
