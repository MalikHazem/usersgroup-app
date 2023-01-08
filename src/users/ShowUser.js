import { Component } from "react";
import { User } from "./User"

export class ShowUser extends Component
{
    render()
    {
        return <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.permission}</td>
        <td>
            <Link className="btn btn-link" to={"https://usersgroup.tk/users/edit/?id=" + this.props.id}>Edit</Link>
            <button className="btn btn-link" onClick={ ()=>{this.props.action(this.props.id)}}>Delete</button>
        </td>
    </tr>
    }
}