import { NavLink } from "react-router-dom"
import { Breadcrumb } from "rsuite"
import {AiOutlineRight} from "react-icons/ai"
import "./style.scss"





function BreadCrumbs(separator: { seperator: any }) {
    return (
        <div className="breadcrumb">
            <Breadcrumb className="breadcrumb-item" separator={<AiOutlineRight></AiOutlineRight>}>
                <Breadcrumb.Item className="bread-home">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">
                    Products
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>

        </div>
    )
}

export default BreadCrumbs
