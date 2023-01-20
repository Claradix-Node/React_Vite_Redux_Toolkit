import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUsers } from './userSlice'

const UserView = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <p>Loading...</p>}
            {!user.loading && user.error ? <p>Error: {user.error}</p> : null}
            {!user.loading && user.users?.length ? (
                <ul>
                    {user.users.map(user => (
                        <li key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default UserView;