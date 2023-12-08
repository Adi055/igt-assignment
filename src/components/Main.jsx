import "./Main.css"
import arrow from "../Assets/arrow.png"
import { MdCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const Main = () => {

    return (
        <section className="pt-5 pb-5">
            <div className="main-section pt-5 ">
                <h5>WHATS THE FUNCTION</h5>
                <h2>Let’s see how it works</h2>
                <div >
                    <div className="row function_content">
                        <div className="box_with_info ">
                            <div>
                                <div className="arrow-img">
                                    <img src={arrow} alt="" />
                                </div>
                                <div className="round-circle">
                                    01
                                </div>

                                <h6>Set disbursement <br /> Instructions</h6>
                                <p>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                            </div>

                        </div>
                        <div className="box_with_info ">
                            <div>
                                <div className="arrow-img" >
                                    <img src={arrow} alt="" />
                                </div>
                                <div className="round-circle">
                                    02
                                </div>


                                <h6>Assembly retrieves <br /> funds from your account</h6>
                                <p>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                            </div>

                        </div>
                        <div className="box_with_info ">
                            <div>
                                <div className="arrow-img">
                                    <img src={arrow} alt="" />
                                </div>
                                <div className="round-circle">
                                    03
                                </div>

                                <h6>Assembly initiates <br /> disbursement</h6>
                                <p>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                            </div>

                        </div>
                        <div className="box_with_info">
                            <div>
                                <div className="round-circle">
                                    04
                                </div>

                                <h6>Customer receives <br /> funds payment</h6>
                                <p>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* second-section */}
            <div className="section price_section pt-5">
                <div className="container">
                    <h5>PRICING PLAN</h5>
                    <h3>Choose your pricing policy</h3>
                    <div className="plan_info_section">
                    <div className="plan mt-4">
                        <ul className="plan_tabs">
                            <li className="plan-tab-item active">Monthly Plan</li>
                            <li className="plan-tab-item">Annual Plan</li>
                        </ul>
                    </div>
                    <div className="price_details">
                        <div className="row pt-5">
                            <div className="col-md-6">
                                <div className="card card-1">

                                    <div className="card-body text-left">
                                        <div className="plan_name_info">
                                            <h4 >Free Plan</h4>
                                        <p>For Small teams or office</p>
                                        </div>
                                        <div className="course-info text-left mt-3">
                                            
                                        <ul className="plan_features_list">
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><RxCrossCircled className=" cross" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><RxCrossCircled  className=" cross" />  Ultimate access to all course, exercises and assessments</li>
                                            </ul>
                                            {/* <MdCheckCircle className="check-icon" /><p> Ultimate access to all course, exercises and assessments</p>
                                            <MdCheckCircle className="check-icon" /> <p> Free acess for all kind of exercise corrections with downloads.</p>
                                            <MdCheckCircle className="check-icon" /><p>Total assessment corrections with free download access system</p>
                                            <RxCrossCircled />  <p> Unlimited download of courses on the mobile app contents</p>
                                            <RxCrossCircled />  <p>Download and print courses and exercises in PDF</p> */}
                                        </div>
                                        <div className="text-center">
                                        <a className="btn btn-outline-warning d-none d-lg-inline-block button1" href="#">Start free trail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-2">

                                    <div className="card-body ">
                                        <div className="pricing_detail">
                                            <div className="text-left">
                                                <button type="button" class="btn btn-warning price-btn">Recommended</button>
                                                <h4>Premimum</h4>
                                                <p>For startup enterprice</p>
                                            </div>
                                            <div>
                                                <p>Starting from</p>
                                                <h3>49.99/mo</h3>
                                            </div>
                                        </div>
                                        <div className="course-info text-left mt-3">
                                            <ul className="plan_features_list">
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                                <li><MdCheckCircle className="check-icon" />  Ultimate access to all course, exercises and assessments</li>
                                            </ul>
                                            {/* <p><MdCheckCircle className="check-icon" /> Free acess for all kind of exercise corrections with downloads.</p>
                                            <p><MdCheckCircle className="check-icon" /> Total assessment corrections with free download access system</p>
                                            <p><MdCheckCircle className="check-icon" /> Unlimited download of courses on the mobile app contents</p>
                                            <p><MdCheckCircle className="check-icon" /> Download and print courses and exercises in PDF</p> */}
                                        </div>
                                        <div className="text-center">
                                        <a className="btn btn-outline-warning d-none d-lg-inline-block button2" href="#">Subscribe Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Main