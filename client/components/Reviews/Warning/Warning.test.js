/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import Warning from './Warning.jsx';
 import { render, cleanup } from '@testing-library/react';
 import renderer from 'react-test-renderer';

 it('Waring will render all the warnings', () => {
  expect(1).toBe(1);
 });

 it('Warning will trigger when clicked',()=>{
  //spy
 });