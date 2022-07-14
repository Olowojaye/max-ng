import { NavLink } from 'react-router-dom';
import './DropDown.css'

function DropDown(props) {

    return (
        <div className={`DropDown ${props.className}`} onClick={props.onClick}>
        {props.list.map((listItem, index) => (
            <NavLink className="sub-link" key={index.toString()} to={listItem.path}>{listItem.name}</NavLink>
        ))}
        </div>
    )
}


export default DropDown;