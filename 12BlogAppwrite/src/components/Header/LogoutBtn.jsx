import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    //log out is a promise
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })     
    }
    return (
       <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
       Logout
       </button>
    )
}

export default LogoutBtn
