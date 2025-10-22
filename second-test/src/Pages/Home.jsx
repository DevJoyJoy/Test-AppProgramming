import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home(){
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const openUserPf = (user) => {
        navigate('/Users', {state: {user}})
    }

    const getUsers = async () => {
        const response = await axios.get('https://avaliacao-bosch.onrender.com/all')
        setUsers(response.data)
        console.log(response.data)
    } 

    useEffect(() => {
        getUsers();
    }, [])

    return(
        <>
            <div className='bg-purple-200 min-h-screen flex flex-col'>
                <div className='bg-purple-950 w-full h-30 flex justify-center align-middle'>
                    <div className='text-white font-bold text-5xl'>Div/as Bosch</div>
                </div>
                <br />

                <h1 className='m-5'>Selecione o perfil: </h1>
                <div className='flex justify-between align-middle'>
                    <ul>
                            <div className='bg-purple-300 flex w-450 h-auto flex-row rounded-2xl p-5'>
                                <br />
                                <br />
                                    {users.map((user) => (
                                        <li key={user.id} onClick={() => openUserPf(user)} style={{cursor:"pointer"}}>
                                            <br />
                                            ID: {user.id}
                                            <br />
                                            Nome: {user.nome} {user.sobrenome}
                                            <br />
                                            Apelido: {user.apelido}
                                            <br />
                                            Status: {user.status}
                                        </li>
                                    ))}
                            </div>
                    </ul>
                </div>
            </div>
        </>
    )
}