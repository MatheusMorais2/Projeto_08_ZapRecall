import Stories from './func/stories.js'
import Posts from './func/posts.js'
import Sidebar from '../SideBar/sidebar.js'

export default function Corpo() {


    return (<div className="corpo">
                <div className='esquerda'>
                    <Stories/>
                    <Posts/>
                </div>
                <Sidebar/>  
            </div>
    )
}