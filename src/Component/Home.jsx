import HomeItem from "./HomeItem";
import {useSelector} from "react-redux";

const Home=()=>{
  const items = useSelector(store =>store.items)
    return  <div className="item-container_2">
    {items.map((data)=><HomeItem item={data}></HomeItem>)}
    </div>
}

export default Home;