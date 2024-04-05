import { useRecoilValue } from "recoil"
import { Balance } from "../css_components/Balance"
import Appbar from '../css_components/Appbar'
import { getB } from "./atoms"
import {User} from '../components/user'
export default function Dashboard(){
    const balance=useRecoilValue(getB)
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