import codingPic from "../../assets/coding.png"
import SignUpForm from "./Components/SignUpForm";

export default function CodersSignUp () {

    return (
        <section className="flex flex-row w-screen h-screen">
            <div id="logo-side" className="bg-cla-main-body w-1/2 h-full flex justify-center items-center">
                <img src={codingPic} alt="coding.png" className="relative w-80" />
            </div>
            <div className="bg-cla-white w-1/2 flex items-center justify-center">
                <SignUpForm />
            </div>
        </section>
    )

}