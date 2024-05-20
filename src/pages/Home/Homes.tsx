import { Footer, Layout } from '../../components/index'
import { Photos } from "../../components/Imgs";
import { BgElement } from "./Home.style";
import { SectionsHome } from "../../components/SectionsHome/SectionsHome";


export default function Home() {


  return (
    <Layout>
      <SectionsHome>
        <BgElement src={Photos.bgRosa} alt="background rosa" />
      </SectionsHome>
      <Footer />
    </Layout >
  )
}