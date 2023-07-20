import React,  {useCallback, useState }  from 'react' ;
import PageCh12_tDemoParagraph from './pageCh12_tDemoParagraph';
import PageCh12_tButton from './pageCh12_tButton';

const   PageCh12_t1 = ()=>{
  const [showParagraph, setShowParagraph] = useState(true);
  const [allowToggle, setAllowToggle] = useState(true);
    console.log('PageCh12_t1--rerender!');

  const  allowToggleHandler= ()=>{
    setAllowToggle(prv=>!prv);
  
  }  ;


  const  toggleParagraphHandler=useCallback(()=>{
    if(allowToggle){
    console.log('PageCh12_t1--toggleParagraphHandler');
    setShowParagraph(prv=>!prv);
  }
  },[allowToggle]);


  
     return (
      <div><hr/> 
      <h2 className="m-2" >PageCh12_t1  -- React.memo -- useCallback  in version 16 / 18  ???  </h2>
      <PageCh12_tDemoParagraph show={showParagraph} /> 
      <PageCh12_tButton onClick={allowToggleHandler}> allow Toggle </PageCh12_tButton>
      <br/>allowToggle : {allowToggle}<br/>
      <PageCh12_tButton onClick={toggleParagraphHandler}>
      toggle Paragraph 
      </PageCh12_tButton>
      </div>
    )
     
} 
export default PageCh12_t1   
