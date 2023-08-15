import welcomeImage from "./images/welcome.jpg";
import travelImage1 from "./images/travel1.jpg";
import travelImage2 from "./images/travel2.jpg";
import travelImage3 from "./images/travel3.jpg";
import "./css/index.css";
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/login');
    return (
        <div className="nav-padding position-relative mb-2 bg-my-primary wide">
            <div className="w-100">
                <img src={welcomeImage} className="w-100" alt={"Welcome"} />
                <h1 className="position-absolute centered text-white">Travel with an Impact</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className="row">
                <div className="col-5 parent">
                    <div className="center padding-70">
                        <h1>App Name</h1>
                        <h3>Slogan</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ante vitae ex porttitor sollicitudin vel ac neque. In quis mi eget arcu egestas sagittis vitae ut dui. Nunc iaculis fringilla eros eu euismod. Phasellus finibus accumsan nisi, posuere pellentesque ligula facilisis ultrices. Aenean tristique massa sit amet nisi cursus, eu tempus elit mattis. Aliquam rutrum velit diam, vel tempus velit placerat id. Vivamus finibus efficitur ipsum, vel commodo nunc convallis eu. Sed .
                        </p>
                        <button onClick={handleClick} className="rounded-pill btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <img className="pos-absolute-10-10" src={travelImage1} height={300} width={300} alt={"Tarvel 1"} />
                        <img className="pos-absolute-50-50 bring-to-front" src={travelImage2} height={250} width={250} alt={"Tarvel 1"} />
                        <img className="pos-absolute-120-20" src={travelImage3} height={400} width={400} alt={"Tarvel 1"} />
                    </div>

                </div>
            </div>


        </div>
        //    <div>
        //     <img src="https://rb.gy/tg5zu" wdith="1920" height="582" ></img>
        //       <h1>Travel with an Impact</h1>
        //    </div>
    );
}
export default Welcome;