import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { App, WrappedApp } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders Hello World', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello world'
    );
  });

  it('Render page not found if in valid path ', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page Not Found'
    );
  });
});
