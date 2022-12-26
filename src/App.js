import "./App.css"
import About from "./components/About"
import Creative from "./components/Creative"
import Educations from "./components/Educations"
import Home from "./components/Home"
import Nav from "./components/Nav"

function App () {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <Creative />
            <Educations />
        </>
    )
}

export default App