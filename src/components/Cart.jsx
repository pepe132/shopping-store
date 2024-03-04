import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, deleteCart } from "../store/actions";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(deleteCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Tu carrito está vacio </h3>
            <NavLink to='/' className='btn btn-dark ms-2 px-3 py-2'>
                Agrega productos a tu carrito
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src='https://i5.walmartimages.com.mx/mg/gm/3pp/asr/cd447a2c-acf0-401e-8b02-e10b051f7b67.a51ae248866d7e6dae69064d894b2fdb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                  alt="uoewbife"
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.nombre_producto}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.precio} = $
                  {product.qty * product.precio}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <FaChevronDown/>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <FaChevronUp/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceder al pago
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
