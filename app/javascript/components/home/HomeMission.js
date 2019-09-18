import React, { PureComponent } from "react";
import Button from "antd/es/button";
import Countdown from 'react-countdown-now';
import CountdownRenderer from "./CountdownRenderer";
import infographic from "../../../assets/images/infographic.svg";
import voting from "../../../assets/images/voting.svg";

class HomeMission extends PureComponent {
    render() {
        return (
            <section>
                <div className="home-our-mission">
                    <div>
                        <h2>A nossa missão</h2>
                        <ol className="home-our-mission-list">
                            <li>
                                Acreditamos que um sistema governativo melhora quando a participação dos cidadãos aumenta. A nossa missão é aumentar a participação dos cidadãos.
                        </li>
                            <li>
                                Acreditamos que uma cidadania mais informada tem uma maior capacidade de contribuir no processo e desenvolvimento democrático.
                        </li>
                            <li>
                                Acreditamos que um sistema governativo melhora quando é transparente em todos os níveis, desde o indivíduo até ao governo, passando pelas iniciativas de cidadãos e pelos partidos.
                        </li>
                            <li>
                                Acreditamos que é importante que este projecto seja politicamente neutro, para evitar que não seja apropriado por forças políticas e porque acreditamos que deve ser estimulado o debate de ideias. Este projecto não é iniciativa de nenhum partido político.
                        </li>
                            <li>
                                Acreditamos que o cidadão informado permite um maior escrutínio das ideias dos vários partidos, permitindo assim a criação de programas eleitorais mais esclarecedores para o cidadão.
                        </li>
                            <li>
                                O acto de escrutínio político leva não só a melhores decisões políticas como a um aumento do espiríto crítico dos cidadãos.
                        </li>
                            <li>
                                Acreditamos que para informar não precisamos de estar dependentes de pressões externas, sejam elas económicas, financeiras, partidárias, religiosas ou culturais. Informar é um dever e um direito do cidadão, participamos neste projecto voluntariamente.
                        </li>
                            <li>
                                Enquanto voluntários desta iniciativa, reconhecemos que somos pessoas, e que todas as pessoas têm as suas próprias inclinações. Devemos garantir que estas inclinações têm o menor impacto possível e, em caso de existência destas, que sejam geridas de forma totalmente responsável e transparente.
                        </li>
                            <li>
                                Aplicamos a nossa preferência pelo espírito crítico ao nosso próprio trabalho, e recebemos de bom grado sugestões e críticas para melhorar.
                        </li>
                        </ol>
                    </div>
                    <div className="home-our-mission-img">
                        <img src={infographic} />
                    </div>
                </div>
                <div className="home-voting-countdown">
                    <img src={voting} />
                    <Countdown date="2019-10-06T09:00:00" renderer={CountdownRenderer} />
                    <Button className="button--grey">Como Votar?</Button>
                </div>
            </section>
        );
    }
}

export default HomeMission;
