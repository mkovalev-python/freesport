import {Col, Row} from "antd";

export default function JustificationBlock(){
    return(
        <div className="subscribes-block">
            <Row>
                <Col span={24} style={{marginTop: "45px"}}>
                    <span className="p1" style={{color: "white"}}>Обоснование социальной значимости</span>
                    <span className="p2" style={{color: "white"}}>системы</span><br/>
                    {/*<span style={{color:"white"}}>В нашей системе предусмотрены разные виды подписок:</span>*/}
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "50px"}} gutter={[0, 16]}>
                <Col span={16} style={{fontSize: "16px", textAlign: "center", color:"white"}}>
                    <p>
                        Раздел в разработке...
                    </p>
                </Col>
            </Row>
        </div>
    )
}