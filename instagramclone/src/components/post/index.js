import PropTypes from 'prop-types'
import Header from './header'

export default function Post({content}){
    console.log("🚀 ~ file: index.js ~ line 4 ~ Post ~ content", content)
    return <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
            <Header username={content.username}/>
    </div>
}

Post.prototype = {
    content:PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comment: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired,
    })
}