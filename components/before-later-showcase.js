import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ImgComparisonSlider} from "@img-comparison-slider/react";


import image1 from '@/images/beforelater/image001_1.jpg';
import image2 from '@/images/beforelater/image001_2.jpg';

import image2_1 from '@/images/beforelater/image002_1.jpg';
import image2_2 from '@/images/beforelater/image002_2.jpg';

import image3_1 from '@/images/beforelater/bmwsuja.jpeg';
import image3_2 from '@/images/beforelater/bmwlimpa.jpeg';

import image4_1 from '@/images/beforelater/image004_1.jpg';
import image4_2 from '@/images/beforelater/image004_2.jpg';


import SectionTitle from "@/components/section-title";

const BeforeLaterShowCase = () => {

    const sectionContent = {
        title: 'OUR WORK',
        subTitle: 'Before and Later Results',
        text: 'Offering the ultimate in paint correction, ceramic coatings, leather care, complete restoration and renewal for the inside and outside of your vehicle.  Strong Arm Detail specializes in removing paint defects such as swirls, scratches, and oxidation in order to restore depth, gloss, and longevity to your paint.  Using only the finest products, tools, and techniques, we proudly restore your vehicle’s paint while protecting and revealing its true beauty in total inside and out.'
    }

    return (
        <section className="commonSection beforelater pb-12 ">
            <Container >
                <Row>
                    <Col lg={12} className="text-center">
                        <SectionTitle data={sectionContent}/>
                    </Col>
                </Row>
                <Row className="text-center justify-content-start ">
                    <Col sm={12} md={12} lg={6}  >
                        <ImgComparisonSlider>
                            <img style={{objectFit: "cover", width: '100%' , }} slot="first" src={image1}/>
                            <img style={{objectFit: "cover" ,width: '100%' , }} slot="second" src={image2}/>
                        </ImgComparisonSlider>
                    </Col>
                    <Col sm={12} md={12} lg={6}  >
                        <ImgComparisonSlider  >
                            <img style={{objectFit: "cover", width: '100%' , }} slot="first" src={image2_1}/>
                            <img style={{objectFit: "cover", width: '100%' , }} slot="second" src={image2_2}/>
                        </ImgComparisonSlider>
                    </Col>
                    <div style={{height: 20}}></div>
                    <Col sm={12} md={12} lg={6}  >
                        <ImgComparisonSlider  >
                            <img style={{objectFit: "cover", width: '100%' , }} slot="first" src={image3_1}/>
                            <img style={{objectFit: "cover", width: '100%' , }} slot="second" src={image3_2}/>
                        </ImgComparisonSlider>
                    </Col>

                    <Col sm={12} md={12} lg={6}  >
                        <ImgComparisonSlider  >
                            <img style={{objectFit: "cover", width: '100%' , }} slot="first" src={image4_1}/>
                            <img style={{objectFit: "cover", width: '100%' , }} slot="second" src={image4_2}/>
                        </ImgComparisonSlider>
                    </Col>

                    {/*<ImgComparisonSlider>*/}
                    {/*    <img style={{objectFit: "fill"}} slot="first" src={image1}/>*/}
                    {/*    <img style={{objectFit: "fill"}} slot="second" src={image2}/>*/}
                    {/*</ImgComparisonSlider>*/}
                </Row>
            </Container>
        </section>
    );
};

export default BeforeLaterShowCase;
