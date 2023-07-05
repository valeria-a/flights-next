// import { getServerSession } from "next-auth/next"
import HeaderContent from "./headerContent"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import { getUserData } from "@/infra/requests"



const Header = async () => {


  // const session = await getServerSession(authOptions)
  // console.log(session)
  
  // const user = await getUserData()

    return(
      <HeaderContent />

    )
}

export default Header;