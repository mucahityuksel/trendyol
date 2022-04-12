import { Breadcrumb } from "rsuite"
import {AiOutlineRight} from "react-icons/ai"
import "./style.scss"


function BreadCrumbs(data : {data: any[]}) {

    return (
        <div className="breadcrumb">
            <Breadcrumb className="breadcrumb-item" separator={<AiOutlineRight></AiOutlineRight>}>
                <Breadcrumb.Item className="bread-home">
                    Ana Sayfa
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">
                    {data.data[0]?.category}
                </Breadcrumb.Item>
                <Breadcrumb.Item className="bread-home">{data.data[0]?.name}</Breadcrumb.Item>
            </Breadcrumb>

        </div>
    )
}

export default BreadCrumbs
