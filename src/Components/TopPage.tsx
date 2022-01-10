import Navigation from "./Navigation"
import Name from "./Name"

function TopPage() {
    return (
        <div className="flex flex-col lg:flex-row h-screen bg-zinc-900">
            <Name />
            <Navigation />
        </div>
    )   
}

export default TopPage
