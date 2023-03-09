import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts"
export default function Home() {
    return <>
        <Herosection src="./images/hero.jpg" />
        <FeatureProducts />
        <Services />
        <Trusted />
    </>
}
