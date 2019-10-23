import React, {useState} from 'react';

const NewArticle = () => {
    const [name, setTitle] = useState()
    const [text, setText] = useState()


    const submit = async() => {
        //gets a file
        var data = document.getElementById("myform");
        var formdat = new FormData(data);

        fetch(`/api/add-article`,
        {
            method: 'post',
            body: JSON.stringify({name, text}),
            headers:{'Content-Type':'application/json',}

        });
        fetch(`/api/image/${name}`,
        {
            method:'post',
            body: formdat,
        });
        setText('');
        setTitle('');
        alert("Posted")
        //scrolls to the top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;

    };
    return(
        <React.Fragment>
            <label>Title:</label>
            <input type="text" value={name} onChange={(event) => setTitle(event.target.value)}/>
            <button onClick={()=>submit()}>Post to site</button>
            <form id="myform" enctype="multipart/form-data">
                <input name="photo" type="file"/>
            </form>
            <label>Content:</label>
            <textarea rows="60" cols="100" value={text} onChange={(event) => setText(event.target.value)}/>
            <button onClick={()=>submit()}>Post to site</button>
        </React.Fragment>
    );
}

export default NewArticle;