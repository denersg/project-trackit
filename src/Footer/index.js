import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { BottomBar, Content } from "./style.js";

export default function Footer(){
    const percentage = 66;
    return(
        <BottomBar>
            <Content>
                <span>Hábitos</span>
                <div>
                    <p style={{ /*width: 91, height: 91, position: "absolute"*/ }}>
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
                        <span>Hoje</span>
                    </p>
                </div>
                <span>Histórico</span>
            </Content>
        </BottomBar>
    );
}