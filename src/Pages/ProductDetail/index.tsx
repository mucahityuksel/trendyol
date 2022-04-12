import React from 'react'
import BreadCrumbs from '../../Components/Breadcrumb'

import Header from '../../Components/Header'

function ProductDetailPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>

      <Header></Header>
      <BreadCrumbs seperator=">"></BreadCrumbs>
    </div>
  )
}

export default ProductDetailPage
