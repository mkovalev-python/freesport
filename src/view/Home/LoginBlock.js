import {Button, Card, Col, Form, Input, Row} from "antd";

export default function LoginBlock() {
    return (
        <div className="login-block" id='tasks'>
            <Row>
                <Col span={24} style={{marginTop: "45px"}}>
                    <span className="p1">Задачи</span>
                    <span className="p2"> системы</span><br/>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "45px", marginBottom: "20px"}} gutter={[0, 16]}>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>Пропаганда и популяризация
                        здорового образа жизни и занятий спортом, организации спортивно-массовых мероприятий посредством
                        создания удобного мобильного приложения на базе Платформы. </Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>Создание условий для удобного
                        бронирования спортивных площадок с целью улучшения физической подготовки и моральных качеств
                        детей, подростков и молодежи</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>Создание условий для регулярного
                        общения спортсменов с тренерами, удобной системы взаиморасчетов и формирования команд схожего
                        уровня подготовки.</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>Создание конкурентной среды среди
                        спортивных площадок с понятным набором параметров, преимуществ и прочих характеристик.</Card>
                </Col>
            </Row>
        </div>
    )
}