import React, { Fragment, useEffect, useState } from 'react';
// import * as firebase from 'firebase';
// import {useObject} from 'react-firebase-hooks/database';
import useInterval from "react-useinterval"; //이놈으로 타이머 깎을 때 사용
import { Row, Col } from 'antd';


const Monitor = () => {

    // let audio = new Audio(beep);

    const [minutes, setMinutes] = useState(7);
    const [seconds, setSeconds] = useState(0);
    const [total, setTotal] = useState(0);

    // const [wait] = useObject(firebase.database().ref('/wait/name'));
    const [waitList, setWaitList] = useState([]);

    // const [tempTime] = useObject(firebase.database().ref('/timer/time'));
    //명단

    return (
        <div style={{
            height: "100vh",
            backgroundImage: `url(back1.png)`,
            backgroundSize: '100% 100%'
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap"
                rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap"
                rel="stylesheet"></link>

            <div style={{ color: 'white', paddingRight: '30px', fontFamily: `Nanum Gothic, sans-serif` }}>

                <Row>
                    <Col span={18}>
                        <Row align={'middle'}>
                            <Col span={6}>
                                <Row justify={'center'} style={{ fontSize: '60px', paddingTop: '20px' }}>
                                    {/* <div>{type && type.val()}</div> */}
                                </Row>
                                <Row justify={'center'} style={{ fontSize: '50px' }}>
                                    Table 1
                                </Row>
                            </Col>
                            <Col span={4}></Col>
                            <Col span={14}
                                style={{
                                    fontSize: '100px',
                                    fontFamily: `Roboto, sans-serif`
                                }}>LV. 1</Col>
                        </Row>

                        <Row align={'middle'}>
                            <Col
                                style={{ marginLeft: '0%' }}
                                span={12}>
                                <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>SB / BB</Row>
                                <Row justify={'center'}
                                    style={{
                                        color: 'yellow',
                                        fontSize: '110px',
                                        lineHeight: '1.2'
                                    }}>{2}</Row>
                            </Col>

                            <Col span={12}>
                                <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>ANTE</Row>
                                <Row justify={'center'}
                                    style={{
                                        color: 'yellow',
                                        fontSize: '110px',
                                        lineHeight: '1.2'
                                    }}>2</Row> {/* levelDB && levelDB.val() >= 3 ? blindDB && blindDB.val() * 2 : 0*/}
                            </Col>


                        </Row>
                        <Row justify={'center'}>
                            <div style={{
                                fontSize: '33em',
                                lineHeight: '0.95'
                            }}>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</div>
                        </Row>
                    </Col>

                    <Col span={6}>
                        <div style={{ height: '10%', paddingTop: '1px' }}>
                            <Row justify={'center'} style={{ fontSize: '60px' }}>Next Game</Row>
                            <Row justify={'center'}
                                style={{ fontSize: '32px' }}>Table 2 &nbsp;&nbsp; </Row>
                            <Row justify={'center'}
                                style={{
                                    fontSize: '32px',
                                    color: '#ff2221',
                                    fontFamily: `Nanum Gothic, sans-serif`
                                }}>{6}분
                                뒤</Row>
                        </div>
                        <div style={{ height: '15%' }}>

                        </div>
                        <div style={{ height: '70%' }}>
                            <Row style={{ fontSize: '38px', textAlign: 'center' }}>
                                <Col span={5}></Col>
                                <Col span={10}>Name</Col>
                                <Col span={9}>Buy-in</Col>
                            </Row>
                            <Row
                                style={{ border: '1px solid', textAlign: 'center', fontSize: '35px', lineHeight: '1.5' }}>
                                <Col span={24}>

                                    {/* <Row style={{ display: one && one.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>1.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{one && one.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{oneB && oneB.val()}</Col>
                                    </Row> */}
                                    <Row >
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>1.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>ss</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>00</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ right: '1px' }}>
                                <Col span={22} style={{ fontSize: '33px', textAlign: 'end' }}>Total {1}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>


                <Row align={'middle'} style={{ fontSize: '33px', lineHeight: '1.6', paddingTop: '25px' }}>
                    <Col span={2} style={{ textAlign: 'center' }}>Waiting</Col>
                    <Col span={22}
                        style={{ border: '1px solid' }}>&nbsp;{ '♠'}</Col>
                </Row>

            </div>

        </div>
    )
};

export default Monitor;