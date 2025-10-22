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

                <div className='flex justify-center align-middle'>
                    <ul>
                        <h1 className='m-5'>Clique no perfil desejado: </h1>
                        <li className='bg-purple-300 flex w-450 h-auto flex-row rounded-2xl p-5 justify-center'>
                            <div className='flex flex-col justify-between'>
                                    {users.map((user) => (
                                        <div className='bg-purple-200 flex w-200 h-auto flex-row rounded-2xl p-5 justify-between m-3 shadow-2xl' key={user.id} onClick={() => openUserPf(user)} style={{cursor:"pointer"}}>
                                            <div className='bg-green-400 w-5 h-5 rounded-full'></div>
                                            <br />
                                            ID: {user.id}
                                            <br />
                                            Nome: {user.nome} {user.sobrenome}
                                            <br />
                                            Apelido: {user.apelido}
                                            <br />
                                            <img className="w-50 h-auto ml-20" src={user.imagem} alt="" />
                                        </div>
                                    ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}