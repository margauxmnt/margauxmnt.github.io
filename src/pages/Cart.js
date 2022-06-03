import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Table from '../components/Table';


function Cart() {
    return (
      <>
        <Navbar />

        <div className="cart_container">
          <div className="cart_header"></div>

          <div className="cart_title">
            <p className="cart_basket">Panier</p>
            <Link to="/bikes">
              <p className="cart_return">
                Continuer mes achats
              </p>
            </Link>
          </div>

          <div className="cart_table">
            <Table />
          </div>
        </div>

        <Footer />
      </>
    );
}

export default Cart;