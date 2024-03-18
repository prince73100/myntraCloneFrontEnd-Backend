import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import {useSelector} from "react-redux";
const Bag = () => {
    const bagItem = useSelector(store=>store.bag)
    const items = useSelector(store=>store.items)
    const itemsFound = items.filter(item=>{
        const itemindex = bagItem.indexOf(item.id);
        return itemindex>=0;
    })
    return <main>
        <div className="bag-page">
            <div className="bag-items-container">
                {itemsFound.map(item=><BagItem item={item} />)}
            </div>
            <BagSummary />
        </div>
    </main>
}
export default Bag;