import './App.css'
import { useParams } from 'react-router-dom'

function Post() {
    //useParamsはstring型しか解放してない感じか...
    const { slug } = useParams<{slug: string}>()
    return (
        <div className="App">
            Postsページです。<br />
            slugは{slug}です。
        </div>
    )
}

export default Post