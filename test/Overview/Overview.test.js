/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent, waitFor } from '@testing-library/react';
 import Overview from '../../client/components/Overview/Overview.jsx';
 //import response from '../RelatedItems/fixtures/response.json';
 import product from '../RelatedItems/fixtures/product.json';
 import response from '../RelatedItems/fixtures/styles.json';
 import '@testing-library/jest-dom/extend-expect';
 import axios from 'axios';
 import fetchGet from '../../client/components/Overview/api/fetchGet.js';
 import getStyles from '/Users/evansding/Desktop/FEC Project 2/FEC/client/components/Overview/api/getStyles.js';

 jest.mock('../../client/components/Overview/api/fetchGet.js');
 jest.mock('/Users/evansding/Desktop/FEC Project 2/FEC/client/components/Overview/api/getStyles.js');



//  it('should show whatever is being rendered the first time', () => {
//   render(<Overview id ={25748} />);
//   expect(screen.getByText('LOADING')).toBeVisible();
//   //need to ask someone tmrw about async and await
//   });

  test('should show whatever is being rendered', async  () => {

    fetchGet.mockResolvedValue(response);
    getStyles.mockResolvedValue(response);

    render(<Overview id ={25167} item = {response}/>);

    // expect(screen.getByText('LOADING')).not.toBeVisible();
     expect(fetchGet).toHaveBeenCalledTimes(0);
     expect(getStyles).toHaveBeenCalledTimes(0);

    await waitFor(() => expect(screen.getByTestId('stylesBox')).toBeInTheDocument(), {timeout: 3000});
    //expect(await screen.findByTestId('stylesBox')).toBeVisible();


    //need to ask someone tmrw about async and await
    });

//  it('should show whatever is being rendered in product image', () => {
//   //console.log((screen.getByTestId('stylesBox'));
//   render(<ProductImage image ={"https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}/>);
//   expect(screen.getByTestId('image')).toBeVisible();
//   });

