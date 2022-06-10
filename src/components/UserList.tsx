import React from 'react'
import {FC, useEffect } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

const UserList: React.FC = () => {
    const  {users,error,loading} = useTypedSelector(state => state.user) // данные из состояния могу методом useSelector получилась деструктуризация
    const {fetchUsers} = useActions();// деструктуризация
    
    
    useEffect(() => {
    fetchUsers()
    }, [])

    if(loading){
        return <h1>Loading...</h1>// если true
    }
    if(error){
        return <h1>{error}</h1>// если ошибка
    }
    
    
    return (
        <div>
            {users.map((user: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <div key={user.id}> 
                <h2>{user.name}</h2>
            </div>)}
        </div>
    );
};

export default UserList