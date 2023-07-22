import React, { Component } from 'react'

export class ErrorBoundery extends Component {
    state={
        hasError:false
    }
    
    componentDidCatch(error){
        console.log('PageCh13_t1--ErrorBoundery--componentDidCatch--error:',error);
      this.setState({ hasError:true})
    }

  render() {
    if(this.state.hasError)
    return <p>Something went wrong</p>
    return   this.props.children;
   }

}

export default ErrorBoundery
