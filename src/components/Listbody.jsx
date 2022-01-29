import React,{PureComponent} from "react";

const style={
    wrapper:{
        display:'flex',
        // flexDirection: 'column',
        // alignItem: 'flex-start',
        padding: '1em'
    },
    name:{
        fontSize:'2em'
    },
    description:{
        display:'none'
        // fontSize:'0.8em'
    }
};

const Listbody =({name,description})=>(
    <div style={style.wrapper}>
        <span style={style.name}>{name}</span>
        <span style={style.description}>{description}</span>
    </div>
)
export default Listbody;