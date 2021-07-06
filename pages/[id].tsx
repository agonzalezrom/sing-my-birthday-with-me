import {database} from "../app/config"
import {useState} from "react";
import {Player} from "../app/components/Player";

export const BirthdayPage = ({name, age}) => {

    const [start, setStart] = useState(false)

    return (
        <>
            {!start ? (
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-center">
                                <button onClick={()=>setStart(true)} className="btn btn-primary">¡Canta conmigo!</button>
                            </div>
                        </div>
                    </div>
                </div>
            ): <Player name={name} age={age} />}
        </>
    )
}

export default BirthdayPage

export async function getServerSideProps(context) {
    const {id} = context.query
    return {
        props: database[id]
    }
}