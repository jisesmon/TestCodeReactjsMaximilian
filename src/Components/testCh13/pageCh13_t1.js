import React, { Component } from 'react'
import PageCh13_ListIBooks from './PageCh13_ListIBooks';
import ErrorBoundery from './ErrorBoundery';

export default class pageCh13_t1 extends Component {
   state={
    books:[{id:1,name:'math'},{id:2,name:'logic'}],
    showParagraph:false,
    booksFilter:[]
   }
  // constructor(){
  //   super();
  //  }
 componentDidMount(){
  console.log('PageCh13_t1--componentDidMount');
  this.setState((x)=>{ 
    return {...x,booksFilter:x.books}
     }); 
 }
 toggleshowParagraphHandeler(){
   this.setState((x)=>{
 return {...x,showParagraph:!x.showParagraph}
  });//=!this.state.showParagraph;...x,
  console.log('PageCh13_t1--toggle show Paragrap--this.State',this.state);
 }

 searchBookHandler(e){
  this.setState((x)=>{ //[{id:1,name:'math'}].filter(x=>x.name.search(e.target.value)>-1)
    return {...x,booksFilter:x.books.filter(x=>x.name.search(e.target.value)>-1)}
     }); 
     console.log('PageCh13_t1--searchBookHandler--this.State',this.state);
     console.log('PageCh13_t1--searchBookHandler--this.State',e.target.value,this.state.books.filter(x=>x.name.search(e.target.value)>-1));
 }
  render() {
    return (
      <div>
         <hr/> 
      <h2 className="m-2" >PageCh13_t1   class-base  </h2>
      Search by name :
      <input onChange={this.searchBookHandler.bind(this)}/>
       <ErrorBoundery>
       <PageCh13_ListIBooks items={this.state.booksFilter} />
       </ErrorBoundery>
      <button className='btn btn-primary' onClick={this.toggleshowParagraphHandeler.bind(this)}>toggle show Paragraph</button>
      {this.state.showParagraph && <p> Paragraph is show !!</p>}
      </div>
    )
  }
}
