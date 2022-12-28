import "./App.css"
import About from "./firstpage/About"
import Award from "./firstpage/Award"
import Blog from "./firstpage/Blog"
import Contact from "./firstpage/Contact"
import Creative from "./firstpage/Creative"
import Educations from "./firstpage/Educations"
import Home from "./firstpage/Home"
import Nav from "./firstpage/Nav"
import Portfolio from "./firstpage/Portfolio"
import Work from "./firstpage/Work"
import { Provider } from "react"
import { Route } from "react-router-dom"

function App () {
    return (
        <>
            {/* <Route path="/first"> */}
                <Nav />
                <Home />
                <About />
                <Creative />
                <Educations />
                <Work />
                <Portfolio />
                <Award />
                <Blog />
                <Contact />
            {/* </Route> */}
        </>
    )
}

export default App