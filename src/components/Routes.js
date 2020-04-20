import React, { Component } from 'react';
import Home from './Home';
import ProductListPage from './../ProductListPage/ProductListPage';
import About from './About';
import ProductContainer from './../containers/productcontainer';
import NotFound from './NotFound';
import ProductActionPage from './../pages/ProductActionPage/ProductActionPage';

const routes = [
	{
		path: '/',
		exact : true,
		main : () => <Home />
	},
	{
		path: '/about',
		exact : false,
		main : () => <About />
	},
	{
		path: '/products',
		exact : false,
		main : () => <ProductContainer />
	},
	{
		path: '/manage',
		exact : false,
		main : () => <ProductListPage />
	},
	{
		path: '/products/add',
		exact : false,
		main : () => <ProductActionPage />
	},
	{
		path: '',
		exact : false,
		main : () => <NotFound />
	}
];

export default routes; 