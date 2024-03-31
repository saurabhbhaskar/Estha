import React from 'react'
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'

function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log("logged out")
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/")
            console.log("logged out")
        })
    }
  return (
    <button
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn;
