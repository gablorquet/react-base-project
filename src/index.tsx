import React, { Suspense } from 'react';
import RouterComponent from '@src/router';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
    <Suspense fallback={null}>
        <BrowserRouter>
            <RouterComponent />
        </BrowserRouter>
    </Suspense>
    , document.getElementById('app')
)
