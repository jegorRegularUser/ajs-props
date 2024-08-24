import * as React from "react";
import "../../App.css";
interface Item {
  listing_id: number;
  url:string;
  MainImage: {url_570xN: string};
  title:string;
  currency_code :string;
  price:string;
  quantity :number;
}
type List  = Item[]
function Listening(props:{data:List}) {
  
  const list = props.data.map((el)=>{  
    return( el && <div className="item" key={el.listing_id }>
    <div className="item-image">
      <a href={el.url}>
        <img src={el.MainImage?.url_570xN} alt='1'/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{el.title}</p>
      <p className="item-price">{el.currency_code='USD'? `$${el.price}` : el.currency_code='EUR'? `€${el.price}` : `${el.price+el.currency_code}`}</p>
      <p className={`item-quantity level-${el.quantity<=10? 'low' : el.quantity<=20? 'medium' : 'high '}`}>{el.quantity} left</p>
    </div>
  </div>
  )}
)


  return <div className="item-list">{list}</div>
}

export default Listening;
