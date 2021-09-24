import HomeBlock from "./HomeBlock";
import SubscribesBlock from "./SubscribesBlock";
import LoginBlock from "./LoginBlock";
import {Footer} from "antd/es/layout/layout";
import logo from "../../resources/img/logo.png";
import {Col, Row} from "antd";
import DescriptionBlock from "./DescriptionBlock";
import JustificationBlock from "./JustificationBlock";
import GeographyBlock from "./GeographyBlock";
import TargetBlock from "./TargetBlock";
import ContactBlock from "./ContactBlock";

export default function Home(){
    return(
        <>
            <section id="section-1">
                <HomeBlock />
            </section>
            <section id="section-2">
                <DescriptionBlock />
            </section>
            <section id="section-3">
                <SubscribesBlock />
            </section>
            <section id="section-4">
                <LoginBlock />
            </section>
            <section id="section-5">
                <JustificationBlock />
            </section>
            <section id="section-6">
                <GeographyBlock />
            </section>
            <section id="section-7">
                <TargetBlock />
            </section>
            <section id="section-8">
                <ContactBlock />
            </section>
            <Footer>
                <Row justify="space-around">
                    <Col span={24}>
                        <img style={{width:"50px",display: "block", marginLeft: "auto", marginRight: "auto"}} src={logo} alt="logo"/>
                        <p style={{textAlign:"center"}}>© 2021 Доступный спорт </p>
                    </Col>
                </Row>
            </Footer>
        </>
    )
}