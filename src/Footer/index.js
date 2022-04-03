import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { BottomBar, Content } from "./style.js";

export default function Footer(){
    const navigate = useNavigate();
    const percentage = 66;
    
    function goToRoute(rota){
        navigate(rota);
    }
    
    return(
        <BottomBar>
            <Content>
                <span className="cursor" onClick={() => goToRoute("/habitos")}>Hábitos</span>
                <div>
                    <p>
                        <CircularProgressbar
                            value={percentage}
                            text={``}
                            styles={buildStyles({
                                rotation: 0,
                                
                                strokeLinecap: 'butt',
                                
                                textSize: '18px',
                                
                                pathTransitionDuration: 0.5,
                                
                                pathColor: `rgb(255, 255, 255)`,
                                textColor: '#fff',
                                trailColor: '#52B6FF',
                                backgroundColor: '#fff',
                            })}
                        />
                        <span className="cursor" onClick={() => goToRoute("/hoje")}>Hoje</span>
                    </p>
                </div>
                <span className="cursor" onClick={() => goToRoute("/historico")}>Histórico</span>
            </Content>
        </BottomBar>
    );
}