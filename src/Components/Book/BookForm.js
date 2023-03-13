import React ,{useState } from 'react';
import './BookForm.css'; 
import Card from '../UI/Card/Card';
import   Button  from '../UI/Button/Button';
import InputTestStyledComponents from '../UI/Input/InputTestStyledComponents';
import styleClassCSSModule from '../UI/Input/InputTestCSSModule.module.css';
 

const BookForm=(props) => {
   //1-way const [name, setName] = useState('');
   //2 ,3  way
   const [userInput,setUserInput]=useState({id:0 ,img:'',name:'',price:0,dateWrite:new Date(Date.now)});

   //validation have 2 way
   //1-way const [isValidInput,setIsValidInput]=useState({  img:true,name:true,price:true,dateWrite:true});
    
   //2-way validation
   const [isValidImg,setIsValidImg]=useState(true);
     const [isValidName, setIsValidName] = useState(true);
     const [isValidPrice, setIsValidPrice] = useState(true);
     const [isValidDateWrite, setIsValidDateWrite] = useState(true);
  


  const nameHandler= (event)=>{
     console.log('nameHandler val',event.target.value);
     //1-way setName(event.target.value);
     //2-way  is   lose data
      //setUserInput( {...userInput,name:event.target.value});
     //3-way is not lose data

     //validation way 1
    //  if(  event.target.value.trim().length > 0 )
    //  setIsValidInput((prevIsvalidInput)=> {return { ...prevIsvalidInput, name:true}});
    //  else
    //  setIsValidInput((prevIsvalidInput)=> {return { ...prevIsvalidInput, name:false}});
     
    if(  event.target.value.trim().length > 0 )
     setIsValidName(true);
     else
     setIsValidName(false);


     setUserInput(perState=>{
        return {...perState,name:event.target.value}
     })
  }
    const imgHandler= (event)=>{
    console.log('imgHandler val',event.target.value); //"".trim().length
    
    if(event.target.value.trim().length > 0)
    setIsValidImg(true);
    else
    setIsValidImg(false);

    setUserInput(perState=>{
        return {...perState,img:event.target.value}
    })
  }
  const priceHandler= (event)=>{
    console.log('priceHandler val',event.target.value);
    if( +event.target.value > 0 )
    setIsValidPrice(true);
    else
    setIsValidPrice(false);

    setUserInput(perState=>{
        return {...perState,price: event.target.value}
    })
  }

  const dateWriteHandler= (event)=>{
    console.log('dateWriteHandler val',event.target.value);
    //if(  event.target.value.trim().length > 0 )
    if( userInput.dateWrite.toString()==='Invalid Date') 
    setIsValidDateWrite(true);
    else
    setIsValidDateWrite(false);


    setUserInput(perState=>{
        return {...perState,dateWrite:new Date(event.target.value)}
    })
  }
  
  const onSave= (event)=>{
    event.preventDefault();
    console.log('BookForm onSave  ',userInput);


    if(userInput.img.trim().length===0)
    setIsValidImg( false );

    if( userInput.name.trim().length===0)
    setIsValidName ( false );
    if( +userInput.price  < 1)
    setIsValidPrice ( false );

    //console.log('userInput.dateWrite',userInput.dateWrite);
   // console.log('userInput.dateWrite',userInput.dateWrite.toString()==='Invalid Date');
   if( userInput.dateWrite.toString()==='Invalid Date') 
    setIsValidDateWrite( false);
    
    if(!isValidImg ||
      !isValidDateWrite  || 
      !isValidName  || 
      !isValidPrice    
      )
      return ;

      console.log('Book to lifting state up  !!');

  const EnteruserInput=userInput;
   props.onSaveNewBook(EnteruserInput); 

    setUserInput({id:0 ,img:'',name:'',price:0,dateWrite:EnteruserInput.dateWrite});
  }



  return (
    <div className="BookForm border border-1 border-info p-3 rounded-3  ">
      <Card>
        <img className="BookForm-img" src={props.img} alt="" />
      </Card>

      <form onSubmit={onSave}>
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            img
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control "
             style={{borderColor:!isValidImg?'red':'back'}}
             value={userInput.img}
              onChange={imgHandler} />
          </div>
        </div>

        <div className={`row mb-3 form-checkvalidtion ${ !isValidName?'invalid':''}`}>
          <label   className="col-sm-2 col-form-label">
            name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" 
            value={userInput.name}
              onChange={nameHandler}  />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">price</label>
          <div className="col-sm-10">
            <input
              type="number"
              min={0}

              className={`form-control
               ${styleClassCSSModule['form-control']}
               ${!isValidPrice && styleClassCSSModule.invalid }`} 

               value={userInput.price}
              onChange={priceHandler}
              
            />
          </div>
        </div>
 
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">dateWrite</label>
          <div className="col-sm-10">
            {/* 1- way  styled by property props */}
            {/* <InputTestStyledComponents type="date" className="form-control" 
             onChange={dateWriteHandler}   inValidP={!isValidDateWrite} /> */}

              {/* 2- way  styled  by set class inValid*/}
             <InputTestStyledComponents type="date" className={`form-control ${isValidDateWrite?'':'inValid'} ` } 
             onChange={dateWriteHandler}  
                  />
 
             {/* value={userInput.dateWrite} */}
 

          </div>
        </div>

        <Button type="submit" >add Book</Button>

        {/* <button type="submit" className="btn btn-primary">
          ok
        </button> */}

      </form>
    </div>
  );
}

export default BookForm