import { useState, useEffect } from "react";
import VolunteerDashboard from './VolunteerDashboard';
import AdminDashboard from './AdminDashboard';
import request from "../../request";
import "../../styles/pagesStyles/dashboard/Dashboard.css";

function Dashboard(){
  const [user, setUser] = useState(undefined); // user object

  async function initialize(){
    setUser(undefined);
    // get user details
    let _user = await (await request.get(`${import.meta.env.VITE_API_BASE}/auth/user`)).json();
    setUser(_user);
  }
  
  useEffect(()=>{
    initialize();
  }, []);

  if(user == undefined)
    return (
      <>
      <div className="navgap"></div>
      <h1>Loading...</h1>
      </>
    )
  else if(user.privileges == "admin")
    return (<AdminDashboard user={user}/>);
  else
    return (<VolunteerDashboard user={user} />);
}

export default Dashboard;