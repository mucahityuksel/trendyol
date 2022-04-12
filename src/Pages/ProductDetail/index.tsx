import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BreadCrumbs from '../../Components/Breadcrumb'
import Detail from '../../Components/Detail'

import Header from '../../Components/Header'

function ProductDetailPage() {

  const data = useSelector((state: any) => state.product.selected)

  useEffect(() => {
    console.log(data)
  }, [])


  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>

      <Header></Header>
      <BreadCrumbs data={data}></BreadCrumbs>
      <Detail data={data}></Detail>
    </div>
  )
}

export default ProductDetailPage
