import {Card, Col, Row} from "antd";

export default function TargetBlock() {
    return (
        <div className="target-block">
            <Row>
                <Col span={24} style={{marginTop: "45px"}}>
                    <span className="p1" style={{color: "white"}}>Целевые группы</span>
                    <span className="p2" style={{color: "white"}}>системы</span><br/>
                    <span style={{color: "white"}}>Для каждой группы предполагается действенный системный инструмент на базе Платформы:</span>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "35px"}} gutter={[0, 16]}>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>1. <b>Для спортсменов</b> - бронирование
                        площадок, исходя из спортивных интересов и территориальной близости, а также уровня спортивной
                        подготовки.</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>2. <b>Для спортивных площадок</b> – система
                        приема заявок на помещения с ведением централизованного календаря бронирований, а также
                        возможностью тираживания своих услуг.</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>3. <b>Для тренеров</b> - привлечение
                        клиентов с удобной системой бронирования тренировок и удобной системой взаиморасчетов.</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{minHeight: "180px"}}>
                    <Card hoverable={true} style={{width: "100%", height: "100%"}}>4. <b>Для организаторов мероприятий</b> -
                        для проведение турниров и привлечение партнеров/спонсоров.</Card>
                </Col>
            </Row>
        </div>
    )
}