import React    from 'react' ;

const   PageCh12_tDemoParagraph = (props)=>{
  console.log('PageCh12_tDemoParagraph--rerender!');
     return (
       props.show && <p>
      Demo Paragraph is show
      </p> 
    )
     
} 
export default React.memo(PageCh12_tDemoParagraph );
