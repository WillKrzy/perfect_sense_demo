import React, {useState} from 'react';

const AddComment = ({name, updateFunc}) => {
    const [username, setUsername] = useState();
    const [text, setText] = useState();

    const submit = async() => {
        const result = await fetch(`/api/articles/${name}/add-comment`,
            {
                method: 'post',
                body: JSON.stringify({username, commentText: text}),
                headers:{'Content-Type':'application/json',}

            });
        const body = await result.json();
        updateFunc(body);
        setText('');
        setUsername('');

    };
    //html returned / rendered
    return (
        <div className="newcomment">
            <label>Username</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <label>Comment text</label>
            <textarea rows="4" cols="50" value={text} onChange={(event) => setText(event.target.value)}/>
            <br/>
            <button onClick={()=> submit()}>Post</button>
        </div>
    );
}
export default AddComment;