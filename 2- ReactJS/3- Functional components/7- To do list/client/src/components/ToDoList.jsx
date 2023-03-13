import { useState } from "react";

const ToDoList = () => {

    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);

    function add(e) {
        e.preventDefault();
        if (inputVal === '') return;
        setList([...list, { text: inputVal, completed: false }]);
        setInputVal('');
    }

    function remove(index) {
        setList(list.filter((_item, i) => i !== index));
    }

    function toggleChecked(index) {
        const obj = { ...list[index] };
        obj.completed = !obj.completed;
        setList([...list.slice(0, index), obj].concat(list.slice(index + 1)));
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                {list.map((item, i) => (
                    <div key={i}>
                        <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
                        <input type="checkbox" checked={item.completed} onClick={() => toggleChecked(i)} readOnly />
                        <button onClick={() => remove(i)}>Delete</button>
                    </div>
                ))}
                <form onSubmit={add}>
                    <input onChange={e => setInputVal(e.target.value)} value={inputVal} />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default ToDoList;