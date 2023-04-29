import { Provider } from "react-redux";
import { store } from "./store";
import { Home_Page } from "./pages";

export default function App() {
    return (
        <Provider store={store}>
            <Home_Page />
        </Provider>
    );
}
