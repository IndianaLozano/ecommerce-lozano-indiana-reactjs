import './App.css';
import NavBar from "./components/navigationBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route
                    exact
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
