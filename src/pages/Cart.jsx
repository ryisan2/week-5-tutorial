import React, { useState } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [checkoutStep, setCheckoutStep] = useState("cart"); // "cart" or "checkout" or "confirmation"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutDetails({ ...checkoutDetails, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Here you would typically process the payment with a payment gateway
    alert("Payment processed successfully! Your order has been placed.");
    setCheckoutStep("confirmation");
    // Clear the cart here if desired, e.g., clearCart();
  };

  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            {checkoutStep === "cart" && (
              <div className="cart">
                <div className="cart__header">
                  <span className="cart__book">Book</span>
                  <span className="cart__quantity">Quantity</span>
                  <span className="cart__total">Price</span>
                </div>
                <div className="cart__body">
                  {cart.map((book) => (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          book.quantity * (book.salePrice || book.originalPrice)
                        ).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                {cart.length === 0 && (
                  <div className="cart__empty">
                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            )}
            {checkoutStep === "cart" && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() => setCheckoutStep("checkout")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}

            {checkoutStep === "checkout" && (
              <div className="checkout">
                <h2>Checkout</h2>
                <form onSubmit={handleCheckout}>
                  <div className="checkout__field">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={checkoutDetails.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="address" className="sr-only">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={checkoutDetails.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="cardNumber" className="sr-only">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={checkoutDetails.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="expiryDate" className="sr-only">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={checkoutDetails.expiryDate}
                      onChange={handleInputChange}
                      placeholder="Expiry Date (MM/YY)"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="cvv" className="sr-only">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={checkoutDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="CVV"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn__checkout">
                    Confirm Payment
                  </button>
                </form>
                <button
                  className="btn btn__cancel"
                  onClick={() => setCheckoutStep("cart")}
                >
                  Cancel
                </button>
              </div>
            )}
            {checkoutStep === "confirmation" && (
              <div className="confirmation">
                <h2>Thank you for your purchase!</h2>
                <p>Your order has been placed and is being processed.</p>
                <Link to="/books">
                  <button className="btn">Continue Shopping</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
