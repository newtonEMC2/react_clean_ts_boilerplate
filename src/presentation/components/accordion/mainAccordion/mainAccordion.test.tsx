import React from 'react';
import { render } from '@testing-library/react';

import { SimpleAccordion } from './mainAccordion.component';

describe('<MainAccordionComponent />', () => {
  it('renders without crashing', () => {
    render(<SimpleAccordion data={[]} />);
  });
  it('creates no rows when passed empty data', () => {
    const component = render(<SimpleAccordion data={[]} />);
    expect(component.container.querySelectorAll('tr')).toHaveLength(1);
  });
  it('creates row when passed 1 element', () => {
    const data = [{
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }];
    const component = render(<SimpleAccordion data={data} />);
    component.getByText('delectus aut autem');
    component.getByText(1);
    component.getByText('false');
    expect(component.container.querySelectorAll('tr')).toHaveLength(2);
  });
  it('creates no rows when data equals undefined', () => {
    const component = render(<SimpleAccordion data={undefined} />);
    expect(component.container.querySelectorAll('tr')).toHaveLength(1);
  });
});
