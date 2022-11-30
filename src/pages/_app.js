import "../../styles/globals.css";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../state/index";

// const store = configureStore({
//   reducer: { cart: cartReducer },
// });

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    // <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    // </Provider>
  );
}

export default MyApp;