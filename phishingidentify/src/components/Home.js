import { Card } from 'primereact/card';
import "../css/Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-column align-items-center mt-8">
            <img className="p-logo-app" alt="logo" src="phishing-logo.png" height="300"></img>
            <span className="text-5xl mt-4">Phishing alert</span>
            <span>"Insertar eslogan"</span>
            <div className="flex mt-7">
                <Card className="mr-6 mb-4 p-container text-center p-card-home">
                    <img className="p-image" alt="analyse" src="analyse.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        localStorage.setItem("currentLocation", "analyse")
                        navigate("/analyse")
                    }}>
                        <div className="p-text">Analizar</div>
                    </div>
                </Card>
                <Card className="mr-6 mb-4 p-container text-center p-card-home">
                    <img className="p-image" alt="analyse" src="statistics.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        localStorage.setItem("currentLocation", "statistics")
                        navigate("/statistics")
                    }}>
                        <div className="p-text">Estadísticas</div>
                    </div>
                </Card>
                <Card className="mr-6 mb-4 p-container text-center p-card-home">
                    <img className="p-image" alt="analyse" src="information.png" height="100"></img>
                    <div className="p-overlay">
                        <div className="p-text">Información</div>
                    </div>
                </Card>
                <Card className="mr-6 mb-4 p-container text-center p-card-home">
                    <img className="p-image" alt="analyse" src="contact.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        localStorage.setItem("currentLocation", "contact")
                        navigate("/contact")
                    }}>
                        <div className="p-text">Conócenos</div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Home;