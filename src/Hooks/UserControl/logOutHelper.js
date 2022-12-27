import axios from "axios"
import { url } from "../../Route/Address"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";


export const logoutHelper = () => {
  const { baseUrl, route, logOut } = url
  const navigate = useNavigate()

  const {isUser,setIsUser}=useContext(AppContext)
  console.log(isUser)

  const logOutAction = async () => {
    await axios.get(baseUrl + route + logOut, { withCredentials: true }).then((res) => {
      setIsUser(!isUser)
      navigate('/login')

      alert(res.data.message)

    }).catch(err => {
      alert(err.message)
    })
  }

  return [logOutAction]
}
