import Header from "./components/Header";
import Partners from "./components/Partners";
import ProductSlider from "./components/ProductSlider";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <ProductSlider />
            <Partners />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default App;