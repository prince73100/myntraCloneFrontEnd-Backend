import { RiUser3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Iconnavbar = () => {

   const bagItem =  useSelector(store => store.bag);
    return <div className="icon">
        <div className="subicon">
            <div className="subicon1">
                <RiUser3Line />
            </div>
            <a className="link1">Profile</a>
        </div>
        <div className="subicon">
            <div className="subicon1">
                <CiHeart />
            </div>
            <a  className="link1">Wishlist</a>
        </div>
        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItem.length}</span>
        </Link>

    </div>
}
export default Iconnavbar;