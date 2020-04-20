import React, {Component} from 'react';
import ManageProducts from './../components/ManageProducts';
import ProductItems from './../components/ProductItems';
import { connect } from 'react-redux';


class ProductListPage extends Component{
        render(){
             var {products} = this.props;
            console.log(products);
            return (
              <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="button" className="btn btn-primary">
                        Add Product
                    </button>
                  </div>
                  <ManageProducts>
                        {this.showProducts(products)}
                    </ManageProducts>
              </div>
            );
    }

    showProducts(products) {
        var result = null;
        if (products.length >0) {
            result = products.map((product,index) => {
                return <ProductItems key ={index} product = {product} />// show the list of product
            });
        }
        return result;
    }   
}



const mapStateToProps = state =>{
    return {
        products : state.products
    }
}

export default connect(mapStateToProps,null)(ProductListPage);