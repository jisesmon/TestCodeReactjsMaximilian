import React, { PureComponent } from 'react'

class PageCh13_ListIBooks extends PureComponent {
  componentDidUpdate(){ 
     if(this.props.items.length===0){
      throw new Error("items books length is  zero ")
    }  
  }
 
   

  render() {
    console.log('PageCh13_ListIBooks--rerender!',this.props.items);
    return (
      <>
      <h3> book list</h3>
        <ul>
          {this.props.items.map(x => {
            return <li key={x.id} className="p-2">{x.name}</li>;
          })}
        </ul> 
     </>
    )
  }
}

export default PageCh13_ListIBooks