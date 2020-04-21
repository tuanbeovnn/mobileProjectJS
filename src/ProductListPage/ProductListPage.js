import React, {Component} from 'react';
import ManageProducts from './../components/ManageProducts';
import ProductItem from './../components/ProductItems';
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductListPage extends Component{

        constructor(props){
            super(props);
            this.state={
                products: []
            };
        }

        componentDidMount(){
            callApi('products','GET', null).then(res=> {
                this.setState({
                    products : res.data
                });
            });
        }

        onDelete = (id) =>{
            var{products} = this.state;
            callApi(`products/${id}`,'DELETE', null).then(res=> {
                if (res.status ===200) {
                    var index = this.findIndex(products,id);
                    if (index != -1) {
                        products.splice(index,1);
                        this.setState({
                            products: products
                        });
                    }
                }
            });
        }

        findIndex = (products, id)=>{
            var result = -1;
            products.forEach((product, index) =>{
                if (product.id === id) {
                    result = index;
                }
            });
        }
        render(){
            // var {products} = this.props;
             var {products} =this.state;
            
            
            console.log(products);
            return (
              <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/add" className="btn btn-primary">
                        Add Product
                    </Link>
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
                return(
                    <ProductItem 
                    key ={index} 
                    product = {product} 
                    index = {index}
                    onDelete ={this.onDelete}

                    />// show the list of product
                ); 
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