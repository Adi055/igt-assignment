import "./Footer.css"


const Footer=()=>{


    return (
        <section className="pt-5 ">
            <div className="footer_top pt-5 pb-5">
                <h3>Ready to learn design <br />
                    with Nia Matos</h3>
                    <div className="mt-5">
                    <a className="btn btn-outline-warning d-none d-lg-inline-block button5" href="#">Start Learning Today</a>
                    </div>
            </div>

                     <footer className="footer ">
        <div className="container pt-5 text-left pb-5">
           <div className="row">
            <div className="col-sm-3">
                <h3 className="footer-heading">About us</h3>
                <ul className="footer-nav">
                    <li>Support center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copyright</li>
                    <li>Popular campaign</li>
                </ul>
            </div>
            <div className="col-sm-3">
            <h3 className="footer-heading">Our Information</h3>
            <ul className="footer-nav">
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Site Map</li>
                    <li>Store Hours</li>
                </ul>
                
            </div>
            <div className="col-sm-3">
            <h3 className="footer-heading">My Account</h3>
            <ul className="footer-nav">
                    <li>Press inquiries</li>
                    <li>Social media</li>
                    <li>directories Images</li>
                    <li>Images & B-roll</li>
                    <li>Permissions</li>
                </ul>
            </div>
            <div className="col-sm-3">
            <h3 className="footer-heading">Policy</h3>
            <ul className="footer-nav">
                    <li>Application security</li>
                    <li>Software principles</li>
                    <li>Unwanted software policy</li>
                    <li>Responsible supply chain</li>
                    
                </ul>
            </div>
           </div>
        </div>
       </footer>
        </section>
      
    )
}

export default Footer