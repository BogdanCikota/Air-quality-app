import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import running from './images/running.png';
import aerobics from './images/aerobics.png';

const HealthStatus = () => {
    const { aqi } = useContext(GlobalContext);

    return (
        <div>
            {
                (aqi > 300) ?
                    <div>
                        <p>Hazardous</p>
                        <p>Everyone should avoid all outdoor exertion</p>
                    </div> :
                    (aqi > 200) ?
                        <div>
                            <p>Very Unhealthy</p>
                            <p>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</p>
                        </div> :
                        (aqi > 150) ?
                            <div>
                                <p>Unhealthy</p>
                                <p>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</p>
                            </div> :
                            (aqi > 100) ?
                                <div>
                                    <p>Unhealthy for Sensitive Groups</p>
                                    <p>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                </div> :
                                (aqi > 50) ?
                                    <div>
                                        <p>Moderate</p>
                                        <p>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                    </div> :
                                    <div>
                                        <p>Good</p>
                                        <img src={running} alt="running person" />
                                        <img src={aerobics} alt="aerobics" />
                                    </div>

            }
        </div>
    );
}

export default HealthStatus;