import React, { Component } from 'react'
const withErrorHandler = (WrappedComponent, axios) => class extends Component {
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
          background: 'transparent',
          border: 'none'
        }
        let responseError

        switch (response.status) {
          case 404:
            responseError = {
              status: 404,
              message: (
                <div className='card' style={style}>
                  <img src='https://firebasestorage.googleapis.com/v0/b/authorshaven-cebfb.appspot.com/o/images%2Fe-commerce-back.jpg?alt=media&token=44654853-e2bb-4dfd-9b47-fbdac5d952a0' className='card-img-top' alt='Not Found' />
                  <div className='card-body'>
                    <h5 className='card-title'>{response.data.message}</h5>
                    <a href='/' className='btn btn-primary'>Homepage</a>
                  </div>
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

export default withErrorHandler
