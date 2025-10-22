import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home(){
    const [users, setUsers] = useState({})
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
                <div className='bg-purple-950 w-full h-30 flex justify-between align-middle'>
                    <div className='text-white font-bold text-5xl'>Div/as Bosch</div>
                </div>
                <br />

                <div className='flex justify-center align-middle'>
                    <div className='bg-purple-300 flex w-450 h-auto flex-row rounded-2xl p-5'>
                        <h1 className=''>Selecione o perfil</h1>
                        <br />
                        <ul>
                            {/* o map não funciona de forma alguma e eu não achei o erro */}
                            {users.map((user) => (
                                <li key={user.id} onClick={() => openUserPf(user)} style={{cursor:"pointer"}}>
                                    {user.id} - {user.nome}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}