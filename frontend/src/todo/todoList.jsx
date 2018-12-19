import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className = {todo.done ? 'markedAsDone' : ''}> {todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}>
                    </IconButton>
                    
                    <IconButton style='warning' icon='repeat'
                        onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}>
                    </IconButton>

                    <IconButton style='danger' icon='trash'
                        onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Lista de tarefas</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}