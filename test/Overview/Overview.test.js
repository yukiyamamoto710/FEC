/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent, waitFor } from '@testing-library/react';
 import ProductImage from '../../client/components/Overview/ProductImage.jsx';
 import Overview from '../../client/components/Overview/Overview.jsx';
 import Thumbnail from '../../client/components/Overview/Thumbnail.jsx';
 import DefaultView from '../../client/components/Overview/DefaultView.jsx'
 import product from '../RelatedItems/fixtures/response.json';
 import product2 from '../RelatedItems/fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';
 import axios from 'axios';
 import fetchGet from '/Users/evansding/Desktop/FEC Project 2/FEC/client/components/Overview/api/fetchGet.js';

 jest.mock('/Users/evansding/Desktop/FEC Project 2/FEC/client/components/Overview/api/fetchGet.js');


//  it('should show whatever is being rendered the first time', () => {
//   render(<Overview id ={25748} />);
//   expect(screen.getByText('LOADING')).toBeVisible();
//   //need to ask someone tmrw about async and await
//   });

  test('should show whatever is being rendered', async () => {

    fetchGet.mockResolvedValue(product);
    //console.log('this is fetchGet', fetchGet());
    render(<Overview id ={25167} />);

    expect(screen.getByText('LOADING')).toBeVisible();
    expect(fetchGet).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText('Item1')).toBeInTheDocument(), {timeout: 3000});
    //expect(await screen.findByTestId('stylesBox')).toBeVisible();


    //need to ask someone tmrw about async and await
    });

//  it('should show whatever is being rendered in product image', () => {
//   //console.log((screen.getByTestId('stylesBox'));
//   render(<ProductImage image ={"https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}/>);
//   expect(screen.getByTestId('image')).toBeVisible();
//   });

