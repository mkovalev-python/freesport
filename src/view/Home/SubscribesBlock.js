import {Card, Col, Row} from "antd";

export default function SubscribesBlock() {
    return (
        <div className="subscribes-block" id="subscribes">
            <Row>
                <Col span={24} style={{marginTop: "45px"}}>
                    <span className="p1" style={{color: "white"}}>Цель</span>
                    <span className="p2" style={{color: "white"}}>системы</span><br/>
                    {/*<span style={{color:"white"}}>В нашей системе предусмотрены разные виды подписок:</span>*/}
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "50px"}} gutter={[0, 16]}>
                <Col span={16} style={{fontSize: "16px", textAlign: "center", color:"white"}}>
                    <p>
                        Создание Автоматизированной информационной спортивной экосистемы Доступный спорт как единого
                        цифрового контура физической культуры и спорта, позволяющей упростить процесс поиска спортивных
                        мероприятий, облегчить процесс бронирования спортивных площадок и оптимизировать взаимодействие
                        между спортсменами и тренерами.
                    </p>
                </Col>
            </Row>
        </div>
    )
}