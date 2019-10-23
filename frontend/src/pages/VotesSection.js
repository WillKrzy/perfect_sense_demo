import React from 'react';
import UpIcon from '../icons/upvote.png';
import DownIcon from '../icons/downvote.png';
const VotesSection = ({articleName, votes, updateFunc}) => {
    //upvote code
    const upVote = async () => {
        const result = await fetch(
            `/api/articles/${articleName}/upvote`,
            {method:'post',}
        );
        const body = await result.json();
        updateFunc(body);
    }

    //downvote code
    const downVote = async () => {
        const result = await fetch (
                `/api/articles/${articleName}/downvote`,
                {method:'post',}
        );
        const body = await result.json();
        updateFunc(body);
    }

    return (
        <React.Fragment>
            <img src={UpIcon} onClick={()=> upVote()} alt="upvote button" height="40" width="50"/>
            <img src={DownIcon} onClick={()=> downVote()} alt="downvote button" height="40" width="55"/>
            <p>This post has been upvoted {votes} times</p>
        </React.Fragment>        
    );
}
export default VotesSection;

