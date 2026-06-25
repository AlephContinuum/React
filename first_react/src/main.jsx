import { createRoot } from "react-dom/client"
import "./index.css"
const root = createRoot(document.getElementById("root"))

root.render(
    <TempName />
)

function TempName() {
    return (
    <main>
    <img src="/images.png" width="40px" alt="React logo" />
        <h1>Fun fact about react!</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was created by Jordan Walke</li>
            <li>Hass over 200k stars on github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps</li>
        </ol>
    </main>
    )
}