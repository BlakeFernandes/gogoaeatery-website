"use server";

import { Suspense } from "react";
import OpenCart from "./store/cart/open-cart";
import Cart from "./store/cart";

const NavCart = () => {
    return (
        <Suspense fallback={<OpenCart />}>
            <Cart />
        </Suspense>
    )
}

export default NavCart;