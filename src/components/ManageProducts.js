import React, {Component} from 'react';
import ProductItems from './ProductItems'


class ManageProducts extends Component{
        render(){
            return (
            	<div class="container">
            			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            				<div className="card">
                                <div className="card-body">
                                <h1 className="section-heading">PRODUCTS LIST</h1>
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">MÃ SP</th>
                                        <th className="text-center">TÊN</th>
                                        <th className="text-center">GIÁ</th>
                                        <th className="text-center">TRẠNG THÁI</th>
                                        <th className="text-center">ACTION</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        <ProductItems />
                                    </tbody>
                                  </table>
                                </div>
                            </div>
            			</div>
            	</div>
      

                );
    }
}

export default ManageProducts;