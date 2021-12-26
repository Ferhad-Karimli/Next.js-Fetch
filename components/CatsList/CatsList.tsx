import { Fragment } from "react"
import { Col, Row } from "react-bootstrap"
import { ItemType } from "../../interfaces"
import { Card } from "../Card/Card"


type Props = {
    cats?: ItemType[]
}

export const CatsList: React.FC<Props> = ({ cats }) => {

    let newFilterData = cats?.filter(item => {
        if(item){
            if(Object.keys(item).length !== 0){
                return true
            }
        }else{
            return false
        }
    })

    return (
        <Fragment>
            <Row >
               {newFilterData?.map(item => <Card key={`cats-item-${item?.id}`}  item={item}/>)}
            </Row>
        </Fragment>

    )
}