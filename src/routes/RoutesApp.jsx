import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import Button from '../components/Button';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const RoutesApp = () => {
    // Obtenemos el tema del context
    const { theme } = useContext(ThemeContext);

    return (
        <Router>
            {/* El theme se pone aquí para envolver mis rutas y contenido */}
            <section className={`App ${theme}`}>
                <div className="content">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/myjob">MyJob</Link>
                    </nav>

                    <Button />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/myjob" element={<MyJob />} />
                    </Routes>
                </div>
            </section>
        </Router>
    );
};

export default RoutesApp;
