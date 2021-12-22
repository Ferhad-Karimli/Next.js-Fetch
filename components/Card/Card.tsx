import { Fragment, useState } from "react"
import { ItemType } from "../../interfaces"

type MyProps = {
    item?: ItemType
}


export const Card: React.FC<MyProps> = ({ item: { name, description, image } }) => {

    let [read, setRead] = useState(false)

    let showImage = () => {
        let imgUrl = 'https://roofat.az/wp-content/themes/consultix/images/no-image-found-360x260.png'

        if (image) {
            imgUrl = image
        }
        return imgUrl
    }

    return (
        <Fragment>
            <div className="mb-5 " style={{ position: "relative" }}>
                <div className="card" >
                    <img src={showImage()} style={{ height: 250 }} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {!read && <button onClick={() => setRead(true)} className="btn btn-success">read more</button>}
                    </div>
                </div>
                {read &&
                    <div className="jumbotron p-3 bg-success text-center text-white " style={{ position: "absolute", top: 320,zIndex:2 }}>
                        <p className="lead">{description}</p>
                        <button className="btn btn-outline-light" onClick={() => setRead(false)}>HIDE</button>
                    </div>
                }
            </div>

        </Fragment>

    )
}