import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import {useState, useEffect} from 'react';
 
function ContentLastProperty(){
    const [lastProperty, setLastProperty] = useState([]);
    useEffect(()=>{
        console.log('Se montó el componente');
        fetch('http://localhost:3002/api/properties')
            .then(response => response.json())
            .then(data =>{
                //console.log(data.properties[data.properties.length-1].id);
                let propertyId = data.properties[data.properties.length-1].id
                let url = 'http://localhost:3002/api/properties/'+ propertyId
                //console.log('http://localhost:3002/api/properties/'+ propertyId);
                fetch(url)
            })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                //setLastProperty(data.properties[data.properties.length-1])
            })
            .catch(error => console.error(error));
    },[])
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
                                    {lastProperty.length === 0 && <p>Cargando</p>}
                                </div>
                               {//lastProperty.images.map((image,i) => {
                                   //return(
                               
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}}  src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                                //)})
                                }
                            </div>
                            <p>{lastProperty.description}</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
					</div>
				</div>
               
					{/*<!-- End content row last movie in Data Base -->*/}

        </React.Fragment>
    )

}
export default ContentLastProperty;