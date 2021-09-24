import {Col, Row} from "antd";
import { CompassTwoTone } from '@ant-design/icons';

export default function ContactBlock(){
    return(
        <div className="contact-block" id="contact">
            <Row style={{marginTop: "45px"}}>
                <Col span={24}>
                    <span className="p1">Контактная</span><span className="p2">информация</span><br/>
                    <span></span>
                </Col>
            </Row>
            <Row justify="center" style={{marginTop: "45px", borderBottom:"solid 1.5px whitesmoke"}}>
                <Col
                xs={18}
                sm={18}
                md={15}
                ls={14}
                xl={10}
                >
                    <p className="p1" style={{fontSize:'24px'}}>Адрес:</p>
                    <p className="p2" style={{fontSize:'18px', marginTop:"-20px"}}>119991 Москва, Ленинский просп., 14</p>
                </Col>
            </Row>
            <Row justify="center" style={{marginTop: "45px"}}>
                <Col
                    xs={18}
                    sm={18}
                    md={15}
                    ls={14}
                    xl={10}
                >
                    <p className="p1" style={{fontSize:'24px'}}>Телефон:</p>
                    <p className="p2" style={{fontSize:'18px', marginTop:"-20px"}}>8 (999) 999 99 99</p>
                </Col>
            </Row>
        </div>
    )
}