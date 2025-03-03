import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"


const SinglePost = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const url = import.meta.env.VITE_ENDPOINT_URL

    const [singlepost, setSinglePost] = useState({})

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then(res => setSinglePost(res.data))
    }, [id])
    return (

        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{singlepost.titolo}</h4>
                        <p className="card-text">{singlepost.contenuto}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <button className="btn btn-primary m-2" onClick={() => navigate(-1)}>Back</button>
                {/* <button className="btn btn-primary m-2" onClick={() => navigate(1)}>Next</button> */}
            </div>
        </>
    )
}

export default SinglePost