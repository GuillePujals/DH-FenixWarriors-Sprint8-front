import React, { Component } from 'react';
import SmallCard from './SmallCard';


class ContentRowProperties extends Component {
  
    constructor(){
        super()
        this.state ={
            cardData : [],
        }
    }

    async componentDidMount(){

        let props = {
            color:   "primary",
            titulo: "Properties in Data Base",
            valor: 0,
            icono: "fas fa-home",                    
        }
        let usr = {
            color:   "success",
            titulo: "Users in Data Base",
            valor: 0,
            icono: "fas fa-users",
        }
        let cat = {
            color:   "warning",
            titulo: "Categories in Data Base",
            valor: 0,
            icono: "fas fa-address-card",
        }

        //Obtengo el total de propiedades en BD's
        let properties = await (await fetch('http://localhost:3002/api/properties')).json();
        if (properties) {
            props['valor'] = properties.meta.count;
            //Obtengo las categorias
            let i=0;
            for (const prop in properties.meta.countByCategory) i++;
            cat['valor']=i;
        }
        //Obtengo el total de usuarios en BD's
        let users = await (await fetch('http://localhost:3002/api/users')).json();
        if (users) usr['valor'] = users.meta.count;

        this.setState({  cardData : [ props, usr, cat ] });
    }

    render() {
        return (
            <React.Fragment>
            {/* <!-- Content Row --> */}
            <div className="row">
                {
                    this.state.cardData.map((data,index)=>{
                        return <SmallCard  {...data}  key= {index}/>
                    })
                }      
            </div>
            </React.Fragment>
            );
    }
}

export default ContentRowProperties;