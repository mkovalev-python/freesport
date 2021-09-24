import {Col, Row} from "antd";
import React from "react";
import MapChart from "../../components/Map";
import Highcharts from 'highcharts/highstock'
import mapData from "../../components/data/mapData";
require('highcharts/modules/map')(Highcharts)
export default function GeographyBlock(){

    const mapOptions = {
        chart: {
            map: 'countries/ru/ru-all'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormatter: function() {
                return this.properties['woe-label'].split(',')[0];
            }
        },
        series: [{
            mapData: mapData,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            },
            name: '',
            data: [
                ['ru-3637', 0],
                ['ru-ck', 1],
                ['ru-ar', 2],
                ['ru-nn', 3],
                ['ru-yn', 4],
                ['ru-ky', 5],
                ['ru-sk', 6],
                ['ru-kh', 7],
                ['ru-sl', 8],
                ['ru-ka', 9],
                ['ru-kt', 10],
                ['ru-2510', 11],
                ['ru-rz', 12],
                ['ru-sa', 13],
                ['ru-ul', 14],
                ['ru-om', 15],
                ['ru-ns', 16],
                ['ru-mm', 17],
                ['ru-ln', 18],
                ['ru-sp', 19],
                ['ru-ki', 20],
                ['ru-kc', 21],
                ['ru-in', 22],
                ['ru-kb', 23],
                ['ru-no', 24],
                ['ru-st', 25],
                ['ru-sm', 26],
                ['ru-ps', 27],
                ['ru-tv', 28],
                ['ru-vo', 29],
                ['ru-iv', 30],
                ['ru-ys', 31],
                ['ru-kg', 32],
                ['ru-br', 33],
                ['ru-ks', 34],
                ['ru-lp', 35],
                ['ru-ms', 36],
                ['ru-ol', 37],
                ['ru-nz', 38],
                ['ru-pz', 39],
                ['ru-vl', 40],
                ['ru-vr', 41],
                ['ru-ko', 42],
                ['ru-sv', 43],
                ['ru-bk', 44],
                ['ru-ud', 45],
                ['ru-mr', 46],
                ['ru-cv', 47],
                ['ru-cl', 48],
                ['ru-ob', 49],
                ['ru-sr', 50],
                ['ru-tt', 51],
                ['ru-to', 52],
                ['ru-ty', 53],
                ['ru-ga', 54],
                ['ru-kk', 55],
                ['ru-cn', 56],
                ['ru-kl', 57],
                ['ru-da', 58],
                ['ru-ro', 59],
                ['ru-bl', 60],
                ['ru-tu', 61],
                ['ru-ir', 62],
                ['ru-ct', 63],
                ['ru-yv', 64],
                ['ru-am', 65],
                ['ru-tb', 66],
                ['ru-tl', 67],
                ['ru-ng', 68],
                ['ru-vg', 69],
                ['ru-kv', 70],
                ['ru-me', 71],
                ['ru-ke', 72],
                ['ru-as', 73],
                ['ru-pr', 74],
                ['ru-mg', 75],
                ['ru-bu', 76],
                ['ru-kn', 77],
                ['ru-kd', 78],
                ['ru-ku', 79],
                ['ru-al', 80],
                ['ru-km', 81],
                ['ru-pe', 82],
                ['ru-ad', 83]
            ]
        }]
    }
    return(
        <div className="possibilities-block">
            <Row style={{marginTop: "45px"}}>
                <Col span={24}>
                    <span className="p1">География</span><span className="p2">проекта</span><br/>
                    <span>Проект рассчитан на всю Россию. Пилотный запуск - Москва</span>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "45px"}} gutter={[0, 16]}>
                <Col span={16} style={{fontSize: "16px", textAlign: "justify",marginBottom:"50px"}}>
                    <MapChart options={mapOptions} highcharts={Highcharts} />
                </Col>
            </Row>

        </div>
    )
}