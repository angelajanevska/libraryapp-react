import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {

    return (
        <tr>
            <th scope={"col"}>{props.term.name}</th>
            <th scope={"col"}>{props.term.category}</th>
            <th scope={"col"}>{props.term.author.name}</th>
            <th scope={"col"}>{props.term.availableCopies}</th>
            <th scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"taken"} className={"btn btn-outline-secondary"}
                   onClick={() => props.onTakeCopy(props.term.id)}>
                    Mark as taken
                </a>
            </th>
        </tr>
    )
}

export default bookTerm;