import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router className="App">
            <NavBar></NavBar>
            <ItemListContainer greeting={"Welcome to ECO-mmerce. Here, you'll find handmade and sustainable products."}/>
        </Router>
    );
}

export default App;
