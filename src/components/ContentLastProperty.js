import React from 'react';
import {useState, useEffect} from 'react';
import Images from './Images';
 
function ContentLastProperty(){
    const [lastProperty, setLastProperty] = useState({});
    useEffect(()=>{
        if(lastProperty.destination){
        console.log(lastProperty.destination.destination)};
    },[lastProperty])
    useEffect(()=>{
        console.log('Se montó el componente');
        fetch('http://localhost:3002/api/properties')
            .then(response => response.json())
            .then(data =>{
             
                //let propertyId = data.properties[data.properties.length-1].id;
                let url = 'http://localhost:3002/api/properties/'+ data.properties[data.properties.length-1].id;
                return url
                //fetch('http://localhost:3002/api/properties/' + data.properties[data.properties.length-1].id)
                
    })
            .then(url => fetch(url))
            .then(property => 
                property.json()
                )
            .then(data =>{
                console.log(data.data.destination.destination);
                setLastProperty(data.data)
                
            })
            .catch(error => console.log(error));
    },[])
    

    //console.log(lastProperty.image);
    
    return(
        <React.Fragment>
            
			{/*<!-- Content Row Last Movie in Data Base -->*/}
			
				{/*<!-- Last Movie in DB -->*/}
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
						</div>
						<div className="card-body">
							<div className="text-center">
                                <div>
                                    {/*<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="http://localhost:3002/img/products/img-1626975982281.jpg" alt="Star Wars - Mandalorian" style = {{width: 40 +'rem'}} />*/}
                                    {(lastProperty.image && lastProperty.image.length > 0)?
                                    lastProperty.image.map ((image,i) => {
                                     return <Images {...image } key={i} />
                                     }):  <p>Cargando</p>}
                                </div>
                            </div>
                            <div>
                                <div>
                                { (lastProperty && lastProperty.destination)?
                                    <p>{lastProperty.destination.destination}</p> : ""}
                                    <p>{lastProperty.description}</p>
                                </div>
                                <div>
                                    <p>${ new Intl.NumberFormat('de-DE', { style: 'decimal' }).format(lastProperty.price)}</p>
                                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View property detail</a>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
               
					{/*<!-- End content row last movie in Data Base -->*/}

        </React.Fragment>
    )

}
export default ContentLastProperty;