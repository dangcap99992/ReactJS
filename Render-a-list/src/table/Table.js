import React, { Component } from "react"
class Table extends Component{
    constructor(props){
        super(props)
        this.state={
         Staff:[
             {
                 Company:"Alfreds Futterkiste",
                 Contact:"Maria Anders",
                 Country:"Maria Anders"
             },
             {
                Company:"Centro comercial Moctezuma",
                Contact:"Francisco Chang",
                Country:"Mexico"
            }
         ],   
        }
    }
     RenderHeaderTable(){
        const header=Object.keys(this.state.Staff[0])
        return header.map((key,index)=><th key={index}>{key.toUpperCase()}</th>)
    }
    RenderTableData(){
        return this.state.Staff.map((Staff,index)=>{
            const {Company,Contact,Country}=Staff
            return(
                <tr>
                    <td>{Company}</td>
                    <td>{Contact}</td>
                    <td>{Country}</td>
                </tr>
            )
        })
    }
    render(){
        return(
    <table>
        <tbody>
            <tr>{this.RenderHeaderTable()}</tr>
            {this.RenderTableData()}
        </tbody>     
    </table>
        )
    }
}
export default Table;