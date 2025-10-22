import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function UserData(){
    const location = useLocation();
    const {user} = location.state || {};

    return(
        <>
        <div className='bg-purple-200 min-h-screen flex flex-col'>
            <div className='bg-purple-950 w-full h-30 flex justify-between align-middle'>
                <div className='text-white font-bold text-5xl'>Div/as Bosch</div>
            </div>
            <br />
            
            <div className='flex justify-center align-middle'>
                <div className='bg-purple-300 flex w-450 h-auto flex-row rounded-2xl'>
                    <div>
                        <img src={user.imagem} className='w-100 h-auto m-3 rounded-2xl' alt="" />
                    </div>
                    <div>
                        <br />
                        ID: {user.id}
                        <br />
                        Nome: {user.nome} {user.sobrenome}
                        <br />
                        Apelido: {user.apelido}
                        <br />
                        Status: {user.status}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}