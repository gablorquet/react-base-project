import React from 'react';
import PlaceholderComponent from '@src/pages/placeholder.page';
import { render } from '@testing-library/react';

describe(('Placeholder'), () => {

    describe('when rendering', () => {

        it('should render hello world', () => {

            const { queryByText } = render(
                <PlaceholderComponent />
            )

            const hello = queryByText('Hello');
            const world = queryByText('World');

            expect(hello).toBeInTheDocument();
            expect(world).toBeInTheDocument();
        })

    })

})
