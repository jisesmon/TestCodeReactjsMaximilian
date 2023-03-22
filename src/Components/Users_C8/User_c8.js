import React ,{useState}from 'react'
import UserListCC8 from './UserList_c8' 
import AddUserCC8 from './AddUser_c8' 

const UserCC8=() => {
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
        <h1 className="m-2" >UserCC8 (chapter 8)</h1>
         
        <AddUserCC8 onSave={onSaveHandler}/> 
        <UserListCC8 users={users} onRemove={onRemoveHandler}/>
        
       </>
    )
   
}

export default UserCC8