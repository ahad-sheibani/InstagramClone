import PropTypes from 'prop-types'
import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import { useRef } from 'react';
import Comments from './comments'

export default function Post({content}){
console.log("🚀 ~ file: index.js ~ line 10 ~ Post ~ content", content)

    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();


    return <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={content.username}/>
             <Image src={content.imageSrc} caption={content.caption}/> 
           <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhotos={content.userLikedPhoto}
                handleFocus={handleFocus}
            />
              <Footer caption={content.caption} username={content.username}/>
            <Comments docId={content.docId} comments={content.comments} posted={content.dateCreated} commentInput={commentInput} /> 
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