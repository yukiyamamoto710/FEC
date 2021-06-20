/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonQA from '../ButtonQA';

afterEach(cleanup);

it('render correctly', () => {
  const { queryByText } = render(<ButtonQA isMoreReviews={true} />);
  expect(queryByText('MORE QUESTIONS')).toBeInTheDocument();
});

it('render correctly', () => {
  const { queryByText } = render(<ButtonQA isMoreReviews={false} />);
  expect(screen.queryByText('MORE QUESTIONS')).toBeNull;
});

it('render correctly', () => {
  const { queryByText } = render(<ButtonQA isMoreReviews={false} />);
  expect(queryByText('ADD QUESTION')).toBeInTheDocument();;
});

it('trigger correctly', () => {
  const test = jest.fn();
  const test1 = jest.fn();
  const { getByTestId } = render(
      <ButtonQA
        isMoreReviews={true}
        addUserReview={test}
        getMoreReviews={test1}
      />,
    );
  fireEvent.click(getByTestId('moreBtn'));
  fireEvent.click(getByTestId('AddBtn'));
  expect(test).toHaveBeenCalledTimes(1);
  expect(test1).toHaveBeenCalledTimes(1);
});

it('should get default addUserReview and cancelAddReview', () => {
  expect(ButtonQA.defaultProps.addUserReview()).toBeDefined();
  expect(ButtonQA.defaultProps.getMoreReviews()).toBeDefined();
});

//  it('matches snapShot', () => {
//    const tree = renderer.create(
//      <ButtonQA
//       isMoreReviews={true}
//      />,
//    ).toJSON();
//    expect(tree).toMatchSnapshot();
//  });
