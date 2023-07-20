import React, {  useState ,useMemo}  from 'react' ;
import PageCh12_tButton from './pageCh12_tButton';
import PageCh12_ListItemDemo from './PageCh12_ListItemDemo';
const   PageCh12_t2 = ()=>{
 const listItem =  useMemo(()=> [5,1,3,85,24]);
 const [title, setTitle] = useState('ttt');
 console.log('PageCh12_t2--rerender!');

 const  changeTitleHandler= ()=>{
  setTitle('sss title'+new Date().getMilliseconds().toString());

}  ;

     return (
      <div><hr/> 
      <h2 className="m-2" >PageCh12_t2    useMemo  in version 16 / 18  ???  </h2>  
       <PageCh12_ListItemDemo title={title} items={ listItem} /> 
      <PageCh12_tButton onClick={changeTitleHandler}> allow Toggle </PageCh12_tButton>
      </div>
    )
     
} 
export default PageCh12_t2   
