import {FaApple} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaApple style={{ color: 'gray' }} onClick={() => onDelete(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
