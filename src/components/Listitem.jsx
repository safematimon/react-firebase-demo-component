import React,{PureComponent} from "react";
import Listbody from './Listbody';
const style={
    li:{
        display: 'flex',
        justifyContent: "flex-start",
        background: 'white',
        boxShadow: '2px 4px 10px rgba(0,0,0,0.2)',
        color: '#707070',
        marginBottom: '1em',
        cursor: 'pointer',
        width: '300px'
    },
    leftWall: color=>({
        width: '0.5em',
        backgroundColor: color
    })
};
export default class Listitem extends PureComponent{
    render(){
        return(
            <li style={style.li} onClick={() => this.props.handleOnClick(this.props.id)}>
                <div style={style.leftWall(this.props.completed ? 'green':'red')}>
                    {/* //list body */}
                    <Listbody name={this.props.name} description={this.props.description} />
                </div>
            </li>
        )
    }
}