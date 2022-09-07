// for cart
export const selectCartList = (state) => state.cart.cartList;

export const selectCartAmount = (state) => state.cart.cartAmount;

export const selectCartTotal = (state) => state.cart.cartTotal.toFixed(2);
// for user
export const selectUserData = (state) => state.user.userData;

export const selectLogin = (state) => state.user.isLoged;
