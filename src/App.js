import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workout from "./pages/Workout";
import "./style/css/style.css";
import SignIn from "./pages/signIn";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Community from "./pages/Community";
import Diet from "./pages/Diet";
import PrivateRoute from "./components/PrivateRoute";
import Help from "./pages/Help";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/forget-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/workouts"
                        element={
                            // <PrivateRoute>
                            <Workout />
                            // </PrivateRoute>
                        }
                    />
                    <Route
                        path="/community"
                        element={
                            // <PrivateRoute>
                            <Community />
                            // </PrivateRoute>
                        }
                    />
                    <Route
                        path="/diet"
                        element={
                            // <PrivateRoute>
                            <Diet />
                            // </PrivateRoute>
                        }
                    />
                    <Route
                        path="/help"
                        element={
                            <PrivateRoute>
                                <Help />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
	              <Footer />
            </BrowserRouter>
        </div>
    );
}
export default App;
