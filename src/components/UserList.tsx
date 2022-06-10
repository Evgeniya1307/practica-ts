import React from 'react'


const UserList: FC = () => {
    const  {users,error,loading} = useTypedSelector(state => state.user) // данные из состояния могу методом useSelector
    const {fetchUsers} = useActions();
    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    
    
    return (
        <div>
            {users.map(user => <div key={user.id}>
                <h2>{user.name}</h2>
            </div>)}
        </div>
    );
};

export default UserList