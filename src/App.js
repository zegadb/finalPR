import "./App.css"
import About from "./components/About"
import Creative from "./components/Creative"
import Educations from "./components/Educations"
import Home from "./components/Home"
import Nav from "./components/Nav"
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
        </>
    )
}

export default App