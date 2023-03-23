import React ,{useState}from 'react'
import UserListCC8 from './UserList_c9' 
import AddUserCC8 from './AddUser_c9' 

const UserCC9=() => {
  const [users, setUsers] = useState();
  const onSaveHandler=(user)=>{
    user.id=Math.random();
    setUsers(pervState=>{

        if(pervState)
        return [ user,...pervState];
        else
        return [ user];
    })
  }
  const onRemoveHandler=(id)=>{
     
    setUsers(pervState=>{
        if(pervState)
         return  pervState.filter(x=>  x.id !==id) ;
        else
         return  pervState;
    })
  }
  
    return (
        <>
        <hr/> 
        <h1 className="m-2" >UserCC9 (chapter 9)</h1>
         
        <AddUserCC8 onSave={onSaveHandler}/> 
        <UserListCC8 users={users} onRemove={onRemoveHandler}/>
        
       </>
    )
   
}

export default UserCC9