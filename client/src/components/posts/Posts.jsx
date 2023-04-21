import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

    //Temporary
    const posts = [
        {
            id: 1,
            name: 'nicat',
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            id: 2,
            name: 'niko',
            userId: 2,
            profilePic: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis fugiat numquam facilis optio vitae incidunt illo possimus id sit dolores.',
        }
    ]
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts