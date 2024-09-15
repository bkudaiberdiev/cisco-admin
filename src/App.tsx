import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Router from "./pages/Router";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
