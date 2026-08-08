import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import serviceS2 from "@/images/CERAMIC_COATING_LAWRENCEVILLE.webp";

const ServiceCeramicCoating = () => {

    return (
        <section className="commonSection">
            <Container>
                <div className="serviceArea">
                    {/*<img src={serviceS1} alt="" />*/}
                    <h2>CERAMIC COATING</h2>
                    <h4>What is a ceramic coating?</h4>

                    <div className="row gaping">
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <p>
                                This is a coating of high-gloss, super slick to the touch , chemically bonding layer of 9h
                                optically clear ceramic. When a coating is correctly applied, your vehicles gloss and protection
                                will be like no other waxes , sealant or ceramic sprays.

                                Hardness : This 9h ceramic coating is resistant to chemicals ranging from 2ph-12ph , because of
                                its high density it makes contaminates such as tree sap , bird poop and road debree a breeze to
                                remove!

                                ​Durability: Along with hardness , ceramic coatings durability outlast any wax, paint sealants
                                or sprays in the market.

                                ​Protection: A ceramic coating offers incomparable protection against everyday paint
                                contaminates. A coating insure your cars paint is always protected for a safe amount time before
                                bird poop, water marks or fading can occur.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <img src={serviceS2} alt=""/>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServiceCeramicCoating;
