import { useRecoilValue } from "recoil"
import { Balance } from "../css_components/Balance"
import Appbar from '../css_components/Appbar'
import { getB } from "./atoms"
import {User} from '../components/user'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const balance=useRecoilValue(getB)
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
      if(token)
    
      return (
        <div>
            <Appbar/>
            <br />
            <h3><Balance value={balance}></Balance></h3>
            <User></User>
        </div>
    )
    else
    useEffect(() => {
      // Perform navigation when the component mounts
      navigate('/signin');
    })
}