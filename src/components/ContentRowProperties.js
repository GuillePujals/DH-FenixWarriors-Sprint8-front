import React, { Component } from 'react';
import SmallCard from './SmallCard';


class ContentRowProperties extends Component {
  
    constructor(){
        super()
        this.state ={
            cardProps : [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:3002/api/properties')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(properties =>{
            //console.log(genres)
            this.setState({  cardProps : [
                {
                    color:   "primary",
                    titulo: "Propeties in Data Base",
                    valor: properties.meta.count,
                    icono: "fas fa-film",                    
                }
            ]  })
        })
        .catch(error => console.log(error));
    }




    render() {
        return (
            <React.Fragment>
            {/* <!-- Content Row --> */}
            <div className="row">
                {
                    this.state.cardProps.map((producto,index)=>{
                        return <SmallCard  {...producto}  key= {index}/>
                    })
                }      
            </div>
            </React.Fragment>
            );
    }
}

export default ContentRowProperties;