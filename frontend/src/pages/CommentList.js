import React from 'react';

const CommentList = ({comments}) => (
    <div>       
        <h3>Comments:</h3>
        {comments&& comments.length && comments.map((comment, key) =>(
            <div key={key} class="comment">
                <h5>{comment.username}</h5>
                <p>{comment.commentText}</p>
            </div>
        ))}
    </div>
);

export default CommentList;