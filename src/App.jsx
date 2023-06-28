import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			{/* <Navbar></Navbar> */}
			<Navbar></Navbar>
			<p>Navbar</p>
		</BrowserRouter>
	);
}

export default App;
