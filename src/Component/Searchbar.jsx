import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
    return <div className="search">
        <div className="icon_3">
            <CiSearch />
        </div>
        <div className="inp1">
            <input type="search" placeholder="Search for product,Brand and more" />
        </div>
    </div>
}

export default Searchbar;