import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { Balance } from "../css_components/Balance";
import Appbar from '../css_components/Appbar';
import { User } from '../components/user';
import { useEffect, useState } from "react";
import { usernameatom } from "./atoms";
export default function Dashboard() {
  const [username,setusername]=useRecoilState(usernameatom)
  const [balance, setBalance] = useState();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await axios.get('https://backend-one-pied.vercel.app/api/v1/account/balance', {
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
    console.log(username)
    fetchData();
  }, []); // Empty dependency array to run only once on component mount
 if(token)
  return (
    <>
      <Appbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome,{username}</h1>
          <h3 className="text-xl text-gray-600">
            <Balance value={balance} />
          </h3>
        </div>
        <div className="mt-6">
          <User />
        </div>
      </div>
    </div>
    </>
  );
};

