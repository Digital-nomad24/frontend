import { useRecoilValue } from "recoil"
import { Balance } from "../css_components/Balance"
import Appbar from '../css_components/Appbar'
import {User} from '../components/user'
export default function Dashboard(){
    // const balance=useRecoilValue(getB)
    return (
        <div>
            <Appbar/>
            <br />
            <h3><Balance value={selector({
  key:'selector',
  get:({get})=>{
    const balance=get(fetchStateAtom)
    return balance.balance ;
  }
})}></Balance></h3>
            {console.log("SEPERATION BTW")}
            <User></User>
        </div>
    )
}