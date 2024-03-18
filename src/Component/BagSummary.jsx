import { useSelector } from "react-redux";

const BagSummary=()=>{
  const bagitems = useSelector(store=>store.bag)
  const items = useSelector(store=>store.items);
  const inbagItem = items.filter((item) =>{
    const filteredItem = bagitems.indexOf(item.id);
    return filteredItem>=0
  })
   let totalPrice = 0;
   let totalDiscount = 0;
   let CONVENIENCE_FEE=99
  inbagItem.forEach(element => {
    totalPrice += element.current_price;
    totalDiscount+= element.original_price - element.current_price
  });

  let finalAmount = totalPrice+ CONVENIENCE_FEE;
 return <div className="bag-summary">
 <div className="bag-details-container">
   <div className="price-header">PRICE DETAILS ({bagitems.length} item) </div>
   <div className="price-item">
     <span className="price-item-tag">  Total MRP</span>
     <span className="price-item-value">₹ {totalPrice}</span>
   </div>
   <div className="price-item">
     <span className="price-item-tag">Discount on MRP</span>
     <span className="price-item-value priceDetail-base-discount">
       -₹ {totalDiscount}
     </span>
   </div>
   <div className="price-item">
     <span className="price-item-tag">Convenience Fee</span>
     <span className="price-item-value">₹ {CONVENIENCE_FEE}</span>
   </div>
   <hr />
   <div className="price-footer">
     <span className="price-item-tag">Total Amount</span>
     <span className="price-item-value">₹ {finalAmount}</span>
   </div>
 </div>
 <button className="btn-place-order">
   <div className="css-xjhrni">PLACE ORDER</div>
 </button>
</div>
}
export default BagSummary;