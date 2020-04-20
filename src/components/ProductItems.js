import React, {Component} from 'react';


class ProducItems extends Component{

    render(){
            let {product,index} = this.props;
           
        return (

            <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{product.id}</td>
                    <td className="text-center">{product.name}</td>
                    <td className="text-center">{product.price}</td>
                    <td className="text-center">{product.description}</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5"></span>Edit
                        </button>
                                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5" 

                            ></span>Remove
                        </button>
                    </td>
            </tr>
            
        );
    }
}

export default ProducItems;