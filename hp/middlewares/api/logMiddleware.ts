import React from 'react'

export function logMiddleware(req:Request) {
  return {
   response: req.method + "" + req.url + "YES"
}
}
