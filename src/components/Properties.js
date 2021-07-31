import React, { Component } from 'react';
import PropertieList from './PropertieList';

class Properties extends Component {
    constructor() {
        super();

        this.state ={
            properties : []
        }
    }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3002/api/properties')).json();
        // console.log(props);
        if (props) {
            this.setState({properties: props.properties})
            console.log(this.state.properties);
        }

    }


    render() {
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the properties in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Detail</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.properties.map((property,index) => {
                                        return <PropertieList  {...property} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}


export default Properties;