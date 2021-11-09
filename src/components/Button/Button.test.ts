import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Button} from './Button';

test('Button', () => {
	it('should render Button', () => {
		render(<Button />)
		const element = screen.getByTestId('button-id');
	});
});

