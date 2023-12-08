import "./Header.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css"
import { FaPaypal } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";

const Header = () => {


    return (
        <section className="first_section">
            <header className="navbar navbar-expand flex-column flex-md-row bd-navbar">
                <div className="container">
                    <a className="navbar-brand mr-0 mr-md-2 " href="/" aria-label="Bootstrap">
                        {/* Logo Here */}
                       <img src="https://ci3.googleusercontent.com/meips/ADKq_NZe-n7C4CUZuVkOM-TOpVAsvGxh7l9ycf_oXVEyeLrC8isv43WE_rjF5V1O4yPtjdU3fzpLiNvQ=s0-d-e1-ft#https://igtechso.com/igt-image.png" alt="" />
                    </a>
                    <div className="navbar-nav-scroll ml-auto mr-auto">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" href="/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">Adversite <IoIosArrowDown/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">Supports <IoIosArrowDown/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Icons');" target="_blank" rel="noopener">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <a className="btn btn-outline-warning d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 button" href="#">Try For Free</a>
                </div>
            </header>
            <div className="container">
            <div className="banner_with_info_wrp text-left pt-5">
                <div className="row">
                    <div className="col-sm-6">
                            <span className="rating_info ">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"  color= "rgb(4, 4, 87)">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color= "rgb(4, 4, 87)">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color= "rgb(4, 4, 87)" >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color= "rgb(4, 4, 87)">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" color="rgb(116, 114, 114)">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <span> Trused by over 4,3332 students</span>
                               
                            </span>
                            <div className="text-content">
                            <h1>Learn Design <br></br> with <span>Nia Matos</span></h1>
                        <p className="pt-1">Get your blood tests delivered at let home collect sample <br /> from the victory of the managments that supplies best <br /> design system guidelines ever.</p>
                            </div>
                       
                        <form>
                            <input type="text" className="form-control pt-1" placeholder="Search Course Name"></input>
                            <IoMdSearch className="search"/>
                        </form>
                        <div className="sponsored_list pt-2">
                            <span>sponsored by:</span>
                            <span><FaPaypal /> Paypal</span>
                            <span>Google</span>
                            <span><FaDropbox /> Dropbox</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        {/* <video width="320" height="240" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                            <source src="movie.ogg" type="video/ogg"></source>
                        </video> */}
                        <iframe width="65%" height="387" src="https://www.youtube.com/embed/u3ybWiEUaUU" title="Starbucks: It Starts With You" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )

}

export default Header