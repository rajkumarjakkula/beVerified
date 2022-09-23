import "./styles.css";
import { BiShow,BiEdit } from "react-icons/bi";

const AllProducts=()=>{
    const list =[{
        "name":'hello',
        "password": 'data'
    },
    {
        "name":'hello',
        "password": 'data'
    },{
        "name":'hello',
        "password": 'data'
    }]
    return(
        <div className="parent">
          {list.map((value,index)=>{
            return (<div key={index} style={{width:'100%'}}>
                <div class="card">
                <div class="container">
                    <div class="">
                    <h4><b>{value.name}</b></h4> 
                    <p>{value.password}</p>
                    </div>
                </div>
                <div class='icons'>
                <BiShow size={20}/>
                <BiEdit size={20}/>

                </div>
                </div>
            </div>)
          })}
        </div>
    )   
}
export default AllProducts;