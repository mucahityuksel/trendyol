import { Breadcrumb } from "rsuite"
import { AiOutlineRight } from "react-icons/ai"
import { useEffect } from "react"
import "./style.scss"
import { Products } from "../FeaturedProduct/type"


const BreadCrumbs = (data: { data: any }) => {
    useEffect(()=>{
        console.log(data)
    },[])
    return (
        <div className="breadcrumb">
            <Breadcrumb className="breadcrumb-item" separator={<AiOutlineRight></AiOutlineRight>}>
                <Breadcrumb.Item className="bread-home">
                    Ana Sayfa
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">
                    {data.data?.category}
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">{data?.data?.name}</Breadcrumb.Item>
            </Breadcrumb>

        </div>
    )
}

export default BreadCrumbs
