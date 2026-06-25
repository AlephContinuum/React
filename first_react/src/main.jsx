import { createRoot } from "react-dom/client"
import "./index.css"
import { Fragment } from "react"

const root = createRoot(document.getElementById("root"))
const ul = document.createElement("ul")
ul.className = ""

root.render(
    <Page />
)

function header() {
    return(
        <header className="header">
            <img src="/images.png" classname="nav-logo" width="40px" alt="React logo" />
            <nav>
                <ul CassName="nav-list">
                    <li className="nav-list-it" Pricing />
                    <li className="nav-list-it" About />
                    <li className="nav-list-it" Contact />
                </ul>
            </nav>

        </header>
    )
}

function main(){
     <main>
                 <h1>Reason am learning react</h1>
                <ol>
                    <li>Was first released in 2013</li>
                    <li>Was created by Jordan Walke</li>
                    <li>Hass over 200k stars on github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps</li>
    
                </ol>
            </main>
}

function footer(){
     <footer>
            <small>&copy; 2026 Conqueror. All rights reserved. </small>
    </footer>
}

function Page() {
    return (
        <>
        <header />
        <main />
        <footer />
            
    </>
    )
}


