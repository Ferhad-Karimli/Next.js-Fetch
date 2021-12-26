import { Fragment, useRef, useState } from "react"
import { Button, Col, Overlay } from "react-bootstrap"
import { ItemType } from "../../interfaces"
import style from './card.module.css'

type MyProps = {
    item?: ItemType
}

export const Card: React.FC<MyProps> = ({ item: { name, description, image } }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    let showImage = () => {
        let imgUrl = 'https://roofat.az/wp-content/themes/consultix/images/no-image-found-360x260.png'

        if (image) {
            imgUrl = image
        }
        return imgUrl
    }

    let popoverContent = <div style={{ width: "99%",  border:"1px solid black",zIndex:"3",marginTop:"40px" }} className={`jumbotron p-3  text-center text-black`} >
        <p className={style.mobileParagraph}>{description}</p>
        <Button variant={"outline-black"} onClick={() => setShow(false)} >HIDE</Button>
    </div>

    return (
        <Fragment>
            <Col sm={6} md={4} lg={3}>
                <div className={style.container} >
                    <div style={{ overflow: "hidden" }}>
                        <img src={showImage()} style={{ height: 250,width:200, transition: "all .2s", transform: `${show ? "scale(1.4)" : "scale(1.0)"}` }} className="card-img-top" alt={name} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Overlay
                            placement="bottom"
                            target={target.current}
                            show={show}
                        >
                            {popoverContent}
                        </Overlay>
                        <Button ref={target} onClick={() => setShow(true)} variant="outline-light">
                            {!show && <span className="btn  mt-7">More Info ... </span>}
                        </Button>
                    </div>
                </div>
            </Col>
        </Fragment>
    )
}