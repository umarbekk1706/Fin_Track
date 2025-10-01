import Hero from "../../sections/hero/Hero";
import Benefits from "../../sections/benefits/Benefits";
import Product from "../../sections/product/Product";
import Started from "../../sections/started/Started";
import Faq from "../../sections/faq/Faq";

function Home() {
  return (
      <main>
          <Hero/>
          <Benefits/>
          <Product/>
          <Started/>
          <Faq/>
      </main>
  )
}

export default Home