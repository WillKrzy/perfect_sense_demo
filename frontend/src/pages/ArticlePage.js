import React, { useState, useEffect} from 'react';
import CommentList from '../pages/CommentList';
import VotesSection from '../pages/VotesSection';
import NotFoundPage from './NotFound';
import AddComment from '../pages/AddComment';
import Image from '../pages/Image';
const ArticlePage = ({match}) => {
    const name = match.params.name;
    const [articleInfo, setArticleInfo] = useState({votes:0});
    useEffect(()=>{
        const fetchData = async() => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name])


    if(!articleInfo) return <NotFoundPage/>
    return (
        <React.Fragment>
            <h1>Article {name}</h1>
            <VotesSection articleName={name} votes={articleInfo.votes} updateFunc={setArticleInfo}></VotesSection>
            <Image image={articleInfo.image}></Image>
            <p>{articleInfo.text}</p>
            <CommentList comments={articleInfo.comments}/>
            <AddComment name={name} updateFunc={setArticleInfo}/>
        </React.Fragment>
    );


}
export default ArticlePage;