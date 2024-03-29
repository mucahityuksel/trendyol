
import { useSelector } from 'react-redux'

import BreadCrumbs from '../../Components/Breadcrumb'
import Detail from '../../Components/Detail'
import FeaturedProduct from '../../Components/FeaturedProduct'
import Footer from '../../Components/Footer'

import Header from '../../Components/Header'

function ProductDetailPage() {

  const data = useSelector((state: any) => state.product.selected)




  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>

      <Header></Header>
      <BreadCrumbs data={data}></BreadCrumbs>
      <Detail data={data}></Detail>
      <FeaturedProduct title=" "></FeaturedProduct>
      <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage
