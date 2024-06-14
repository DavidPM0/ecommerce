import { BsCart2 } from "react-icons/bs";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
        <BsCart2 color="white" size={40}/>
    </div>
  );
};

export default CartWidget;
