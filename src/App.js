import "./App.css"
import About from "./components/About"
import Award from "./components/Award"
import Creative from "./components/Creative"
import Educations from "./components/Educations"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"
import Work from "./components/Work"

function App () {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <Creative />
            <Educations />
            <Work />
            <Portfolio />
            <Award />
        </>
    )
}

export default App