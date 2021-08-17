import React from 'react';
import { render } from '@testing-library/react';

import { SimpleAccordion } from './mainAccordion.component';

describe('<MainAccordionComponent />', () => {
  it('matches snapshot when empty', () => {
    const component = render(<SimpleAccordion data={[]} />);
    expect(component.container).toMatchSnapshot();
  });
  it('matches snapshot when data values are passed on', () => {
    const data = [{
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }];
    const component = render(<SimpleAccordion data={data} />);
    expect(component.container).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    render(<SimpleAccordion data={[]} />);
  });
});
