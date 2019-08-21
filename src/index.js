/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react'

export const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }

    this.resInterceptor = axios.interceptors.response.use(
      res => res,
      (error) => {
        const { response } = error
        const style = {
          width: '600px',
          margin: '50px auto',
          'min-height': '80vh',
          background: 'transparent',
          border: 'none'
        }
        let responseError

        switch (response.status) {
          case 404:
            responseError = {
              status: 404,
              message: (
                <div className='card error-handler-div' style={style}>
                  <img src='https://firebasestorage.googleapis.com/v0/b/authorshaven-cebfb.appspot.com/o/images%2FnotFound.svg?alt=media&token=f791a123-c9b5-4278-953e-0d39f5a3fe29' className='card-img-top' alt='Not Found' />
                  <p className='card-title'>{response.data.message}</p>
                </div>
              )
            }
            this.setState({ error: responseError })
            break
          default:
        }
      }
    )
  }

  render() {
    const { error } = this.state
    if (!error) {
      return <WrappedComponent {...this.props} />
    }
    return error.message
  }
}
