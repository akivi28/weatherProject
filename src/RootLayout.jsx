import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const RootLayout =()=>{
    return(<>
        <SearchBar/>
        <Outlet/>
    </>)
}

export default RootLayout;