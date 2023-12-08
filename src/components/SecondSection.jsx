import "./SecondSection.css"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import img4 from "../Assets/img4.png"
import { IoPlay } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const SecondSection = () => {

    return (
        <section className="main_content_wrp pt-5 pb-5">
            <div className="container">
                {/* First Section Code Here */}
                <div className="section post_section pt-5 pb-5">
                    <h5>QUALITY FEATURES</h5>
                    <h2>Tutorials that people love most</h2>
                    <div className="poeple_post text-left">
                        <div className="row pt-4">
                            <div className="col-md-4">
                                <div className="card ">
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                                    <div className="card-body set-img">
                                        <img src={img1} alt="" />
                                        <div className="symbol"><img src={img4} alt="" /> <IoPlay className="play-icon" /></div>
                                        <div className="rating-information">
                                            <span className="rating_info">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>


                                            </span>
                                            <span>5.0</span>
                                            <span>(392 reviews)</span>
                                        </div>

                                        <p className="card-text">How to work with prototype design with adobe xd featuring tools</p>
                                        <div className="eye-content">
                                            <span className="eye-icon"><IoMdEye /></span>
                                            <span>2,538 students watched</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                                    <div className="card-body">
                                        <img src={img2} alt="" />
                                        <div className="symbol"><img src={img4} alt="" /><IoPlay className="play-icon" /></div>
                                        <div className="rating-information">
                                            <span className="rating_info ">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>


                                            </span>
                                            <span>4.5</span>
                                            <span>(524 reviews)</span>
                                        </div>

                                        <p className="card-text">Create multiple artboard by using figma prototyping tools development</p>
                                        <div className="eye-content">
                                            <span className="eye-icon"><IoMdEye /></span>
                                            <span>3,532 students watched</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                                    <div className="card-body">
                                        <img src={img3} alt="" />
                                        <div className="symbol"><img src={img4} alt="" /><IoPlay className="play-icon" /></div>
                                        <div className="rating-information">
                                            <span className="rating_info">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>


                                            </span>
                                            <span>5.0</span>
                                            <span>(392 reviews)</span>
                                        </div>

                                        <p className="card-text ">Convert your web layout theming easily with sketch zeplin extension</p>
                                        <div className="eye-content">
                                            <span className="eye-icon"><IoMdEye /></span>
                                            <span>1,037 students watched</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section Code Here */}
                <br />
                <div className="section like_share_count_section pt-5">
                    <div className="row">
                        <div className="col-sm-6 box-content">
                            <div className="box_with_like like-color1">
                                <div>
                                    <h3>80K+</h3>
                                    <p>We have more than <br />students</p>
                                </div>

                            </div>
                            <div className="box_with_like like-color2">
                                <div>
                                    <h3>150+</h3>
                                    <p>Free online tutorials <br />videos avialbale</p>
                                </div>

                            </div>
                            <div className="box_with_like like-color3">
                                <div>
                                    <h3>90+</h3>
                                    <p>Daily updated blog <br /> post maintain</p>
                                </div>

                            </div>
                            <div className="box_with_like like-color4">
                                <div>
                                    <h3>& 3M</h3>
                                    <p>Job posted everydays with qualification</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-4 text-left" >
                            <h5>CORE FEATURES</h5>
                            <h3>Smart Jackpots that you may love this anytime & anywhere</h3>
                            <p className="card-text intro-text">Get your tests delivered at let home collect sample from the victory of the mangments that supplies
                                best design system guidelines ever. Get your tests delivered at let home collect sample </p>
                            <a className="btn btn-outline-warning d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 button btn1" href="#">Explore details</a>
                        </div>
                    </div>
                </div>

                {/* Third Section Code Here */}
                <div className="section bloging_section pt-5">
                    <h5>QUALITY FEATURES</h5>
                    <h3>Popular Designing Course</h3>
                    <div className="poeple_post mt-5">
                        <div className="card">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="circle"><img src={img4} alt="" /><IoPlay className="circle-icon" /></div>
                                </div>
                                <div className="col text-left box-font">
                                    <div className="rating-information">
                                        <span className="rating_info">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span>5.0</span>
                                        <span>(392 reviews)</span>
                                        <span className="eye-icon"><IoMdEye /></span>
                                        <span>3,532 students watched</span>
                                    </div>
                                    <h4 className="card-text">Professional graphic design tutorial full course with exercise file </h4>
                                    <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="btn btn-success mr-2">7 Video Classes | 4hrs</a><IoIosArrowDown />
                                </div>
                            </div>
                            {/* <div className="card-body">


                                </div>
                                <div className="row-md-12">
                                </div> */}
                        </div>
                        <div className="card">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="circle"><img src={img4} alt="" /><IoPlay className="circle-icon" /></div>
                                </div>
                                <div className="col text-left box-font">
                                    <div className="rating-information">
                                        <span className="rating_info">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span>5.0</span>
                                        <span>(392 reviews)</span>
                                        <span className="eye-icon"><IoMdEye /></span>
                                        <span>3,532 students watched</span>
                                    </div>
                                    <h4 className="card-text">Professional graphic design tutorial full course with exercise file </h4>
                                    <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="btn btn-success mr-2">7 Video Classes | 4hrs</a><IoIosArrowDown />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="circle opacity0"><img src={img4} alt="" /><IoPlay className="circle-icon" /></div>
                                </div>
                                <div className="col">
                                    <div className="check_content text-left row content-box">
                                        <div className="col-sm-6 ">
                                            <p >
                                                <MdCheckCircle />  How to reduce file pixel dimentions without loosing quality

                                            </p>
                                            </div>
                                            <div className="col-sm-6">
                                            <p>
                                                <MdCheckCircle /> How to make logo pixel perfects with different extension
                                            </p>
                                            </div>
                                        <div className="col-sm-6">
                                            <p>
                                                <MdCheckCircle /> Create vector file from restarize layer styles
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>
                                                <MdCheckCircle /> Make color gradient with photoshop build-in tools
                                            </p></div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-body">


                                </div>
                                <div className="row-md-12">
                                </div> */}
                        </div>
                        <div className="card">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="circle"><img src={img4} alt="" /><IoPlay className="circle-icon" /></div>
                                </div>
                                <div className="col text-left box-font">
                                    <div className="rating-information">
                                        <span className="rating_info">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span>5.0</span>
                                        <span>(392 reviews)</span>
                                        <span className="eye-icon"><IoMdEye /></span>
                                        <span>3,532 students watched</span>
                                    </div>
                                    <h4 className="card-text">Professional graphic design tutorial full course with exercise file </h4>
                                    <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="btn btn-success mr-2">7 Video Classes | 4hrs</a><IoIosArrowDown />
                                </div>
                            </div>
                            {/* <div className="card-body">


                                </div>
                                <div className="row-md-12">
                                </div> */}
                        </div>
                        <div className="card">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="circle"><img src={img4} alt="" /><IoPlay className="circle-icon" /></div>
                                </div>
                                <div className="col text-left box-font">
                                    <div className="rating-information">
                                        <span className="rating_info">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48" >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="#EF9E48">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span>5.0</span>
                                        <span>(392 reviews)</span>
                                        <span className="eye-icon"><IoMdEye /></span>
                                        <span>3,532 students watched</span>
                                    </div>
                                    <h4 className="card-text">Professional graphic design tutorial full course with exercise file </h4>
                                    <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="btn btn-success mr-2">7 Video Classes | 4hrs</a><IoIosArrowDown />
                                </div>
                            </div>
                            {/* <div className="card-body">


                                </div>
                                <div className="row-md-12">
                                </div> */}
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default SecondSection