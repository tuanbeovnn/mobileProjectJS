import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import ProductList from '../components/ProductList';
// import {actAddProductRequest,acUpdateProductRequest,actGetProductRequest,actFetchProductsRequest} from './../actions/index';
// import itemSelected from './../reducers/itemSelected'
class ProductActionPage extends Component {
  

render(){
 return (
  <div className="container">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Tên Sản Phẩm</label>
                    <input name="name" className="form-control"/>
                  </div>
              <div className="form-group">
                    <label>Giá</label>
                    <input type="number" name="price" className="form-control"/>
              </div>
            <div className="form-check">
              <label className="form-check-label mr-5"> Trạng Thái</label>
              <input type="checkbox" name="status" className="form-check-input mr-10"/>
               Còn Hàng
            </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button to="/product-list" className="btn btn-danger mr-5">
                  <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
            </button>
              </form> 
  </div>


 );
}

}

export default (ProductActionPage);