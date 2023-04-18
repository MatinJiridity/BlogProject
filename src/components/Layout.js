// outlet reprsents all of the children ; 
// when we put the layout into out application 
// it can then all of these childern underneath 
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  )
}

export default Layout