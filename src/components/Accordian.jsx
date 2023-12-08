import "./Accordian.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Accordian = () => {

    return (
        <section className="container main_box pb-5 pt-5">
            <div className=" pt-5 pb-5">
                <h5>FREQUENT QUESTION</h5>
                <h3>Do you have any question</h3>

            </div>
            <div className="pt-5 text-left acco-box">
                <ul className=" accordian">
                    <li><CiCirclePlus className="plus"/> How to contact with riders emergency ?</li>
                    <li><CiCirclePlus className="plus"/> App installation failed, how to update system information?</li>
                    <li><CiCircleMinus className="plus"/> Website reponse taking time, how to improve?</li>
                    <li> An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as <br /> Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, <br /> email lists, and online forums where common questions tend to recur, for example through posts or queries by <br /> new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</li>
                    <li><CiCirclePlus className="plus"/> New update fixed all bug and issues</li>

                </ul>
                
            </div>
        </section>
    )
}

export default Accordian