import axios from "axios";
import { Balance } from "../css_components/Balance";
import Appbar from '../css_components/Appbar';
import { User } from '../components/user';
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [balance, setBalance] = useState();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await axios.get('http://localhost:3000/api/v1/account/balance', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `Bearer ${token}`
          }
        });
        setBalance(res.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
        // Handle error, such as showing an error message to the user
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount
 if(token)
  return (
    <div>
      <Appbar />
      <br />
      <h3><Balance value={balance}></Balance></h3>
      <User></User>
    </div>
  );
}
