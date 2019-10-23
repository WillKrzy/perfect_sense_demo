import React, {useState, useEffect}from 'react';
import VotesSection from '../pages/VotesSection';

const ArticlesList = () => {
    //the [] in the second argument stops this from running whenever react updates
    const [articles, setArticles] = useState();
    useEffect(()=> {
        const getArticles = async() => {
            const result = await fetch(`/api/articles-main/all`);
            const res = await result.json();
            setArticles(res);    
        }
        getArticles();

    }, [])

    //cant call a react hook in the return so cop paste work around
    const getUpdatedVotes = () => {
        const getArticles = async() => {
            const result = await fetch(`/api/articles-main/all`);
            const res = await result.json();
            setArticles(res);    
        }
        getArticles();
    }

    function mySort(arr) {
        arr.sort(function comp(a,b){return b.votes - a.votes});
    }
    
    if(articles && articles.length > 0) {
        mySort(articles);
    }

    return(
        <React.Fragment>
            <h1>Pages</h1>
            {articles && articles.length && articles.map((art, key) => (
                <div key={key}>
                    <a href={"/article/" + art.name}>{art.name}</a> <br/>
                    <VotesSection articleName={art.name} votes={art.votes} updateFunc={getUpdatedVotes}></VotesSection>
                </div>
            ))}       
        </React.Fragment>
    )
}

export default ArticlesList;