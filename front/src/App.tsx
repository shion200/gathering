import "./App.css";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Alcohol } from "./pages/Alcohol";
import { Collection } from "./pages/Collection";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

const App: React.FC = () => {
	return (
		<div>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/alcohol" element={<Alcohol />} />
					<Route path="/collection" element={<Collection />} />
				</Routes>
			</AuthProvider>
		</div>
	);
};

export default App;
