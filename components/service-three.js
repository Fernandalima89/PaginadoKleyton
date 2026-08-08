import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ServicePostThreeData} from "@/data";
import ServiceCardThree from "@/components/service-card-three";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";

const ServiceThree = () => {
    const {sectionContent, posts} = ServicePostThreeData;
    const {title, subTitle, text} = sectionContent;
    return (
        <section className="commonSection what_wedo_2">
            <Container>
                <div className="serviceArea">
                    {/*<img src={serviceS1} alt="" />*/}
                    <h2>PAINT CORRECTION</h2>
                    <h4>What exactly is paint correction ?</h4>
                    <p>
                        Paint correction is the art of taking a vehicles paint and correcting it to our clients
                        expectations.
                        Many times it is confused as a “buffing job”. In technical terms it is leveling your paints
                        clear coat in a microscopic level.
                        In simplier words , paints defects such as scratches, swirls, water marks, paint oxidation etc.
                        are all indentures in your clear coat.
                        So when light hits your clearcoat the uneven surfaces doesnt bounce the light back evenly
                        creating less reflection and gloss.
                    </p>

                    <div className="row gaping">
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <img src={serviceS2} alt=""/>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <p>The process is a long and timely process and it goes as follows.</p>
                            <h3 className="m-0 pb-3">PREP:</h3>
                            <ul>
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    Vehicles paint is washed thoroughly
                                </li>
                                <br />
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    Paint recieves a iron decontamination
                                </li>
                                <br />
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    All surfaces receive a light to hard clay bar (Removes embedded contaminates)
                                </li>
                            </ul>
                            <p></p>
                            <h3 className="m-0 pb-3">CORRECTION:</h3>
                            <p>Vehicle is pulled into shop and spot lights are set up</p>
                            <ul>
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    1 st pass is a hard cutting (cut down into the clear cut to level defects) – Depending on paint condition ,clear coat thickness & hardness along with client expectation determines​ how many times this process is repeated.
                                </li>
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    2nd step is a refining step, to remove haze and small scratches from “buff” along with bringing back some gloss and depth
                                </li>
                                <li>
                                    <i className="fa fa-check-square"></i>
                                    3rd step is a finishing polish step to really refine the paint and give it that show car finish.
                                </li>
                            </ul>
                            <p></p>
                            <p>Final step is applying some sort of paint protection wether its wax , sealant or a premium ceramic coating.</p>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServiceThree;
