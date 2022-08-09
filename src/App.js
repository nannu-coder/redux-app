import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./Features/Cart/CartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
