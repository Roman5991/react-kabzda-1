import c from './Profile.module.css'

const Profile = () => {
    return <div className={c.profile}>
        <div>
            <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'></img>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            My posts
        </div>
        <div>
            New post
        </div>
        <div className='Posts'>
            <div className={c.item}>
                Post1
            </div>
            <div className={c.item}>
                Post2
            </div>
        </div>
    </div>

};

export default Profile;