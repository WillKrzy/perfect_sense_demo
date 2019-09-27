import React from 'react';
const ArticlePage = ({match}) => {
    const name = match.params.name;
    return (

        <React.Fragment>
        <h1>Article {name}</h1>
    </React.Fragment>
    );


}
export default ArticlePage;