import { instance, cancelToken } from './axiosConfig'
import axios from './axiosConfig'

export const fetch = async (req, method, values) => {
  let result = null
  const params = {
    method: method,
    url: req,
  }
  if(values) params.data = { ...values } 
  try {
    result = await instance(params);
    return { data: result.data }
  } catch (error) {
    console.log(error)
    if (axios.isCancel(error)) { }
    if (error.response) return { error: error.response.data }
    else return { error: error }
  }
}






