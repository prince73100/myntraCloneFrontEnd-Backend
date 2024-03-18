import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
    const dispatch = useDispatch();
    const bagItem = useSelector(store => store.bag)

    const bagItemfound = bagItem.indexOf(item.id) >= 0;
    //handler addto bag

    const onhandler = () => {
        dispatch(bagActions.addTobag(item.id));
    }
    const onremovehandler = () => {
        dispatch(bagActions.removeTobag(item.id));
    }

    return <div className="item-container">
        <div className="item-image">
            <img src={item.image} alt="" />
        </div>
        <div className="rating">
            {item.rating.stars} <span>&#9733;</span>| {item.rating.count}
        </div>
        <div className="company-name">
            <h5>{item.company}</h5>
        </div>
        <div className="item-name">
            <span>{item.item_name}</span>
        </div>
        <div className="price">
            <span className="current-price">RS {item.original_price}</span>
            <span className="original">RS {item.current_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {bagItemfound ? <button className="btn-primary_1" onClick={onremovehandler} >Remove Item</button> : <button className="btn-primary" onClick={onhandler}>Add item</button>}


    </div>
}
export default HomeItem;