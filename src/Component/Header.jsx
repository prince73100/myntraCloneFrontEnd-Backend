import Iconnavbar from "./Iconnavbar";
import ImageMyn from "./ImageMyn";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Header = () => {
    return <div className="navbar">
        <ImageMyn ></ImageMyn>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Iconnavbar />
    </div>
}
export default Header;