import {useState, useEffect} from 'react';

function TaskList() {
    // state variables for products, loading status, and error handling
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8082/api/task') // fetch products from API
        .then(res => res.json()) // parse JSON response
        .then(json => {
            setTaskList(json); // update product list state
            setLoading(false); // set loading to false
       }) 
         .catch(err => {
            setError(err.message); // set error message
            setLoading(false); // set loading to false
         });
         
    }, []) // empty dependency array to run only once on mount

    if (loading) {
        return <div>Loading...</div>; // show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // show error message
    }

    if(taskList.length === 0) {
        return <div>No Task available.</div>; // show no products message
    }

    return (
        <div>
            <h2>Task List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through productList and display each product in a table row */ }
                    {taskList.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td>{task.due_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    
}
    export default TaskList;