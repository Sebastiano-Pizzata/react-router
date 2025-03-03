import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Posts = () => {
    const [posts, setPosts] = useState([])

    const url = import.meta.env.VITE_ENDPOINT_URL;


    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        posts.map((post) => {
                            return (
                                <div key={post.id} className="col-4 mb-4 mt-4">
                                    {/* <NavLink> */}
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{post.titolo}</h4>
                                            <p className="card-text">{post.contenuto}</p>

                                        </div>

                                    </div>
                                    {/* </NavLink> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}


export default Posts