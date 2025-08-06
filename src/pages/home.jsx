import Header from "../components/header"
import MainLayout from "../layouts/mainLayout"
import "../styles/pages/home.scss"

function Home(){
    return (
        <div className="home-container">
            {Array.from({length:10}).map((_,index) => (
                <div className="component-test">hahahahahahaha</div>
            ))}
        </div>
    )
}

export default Home