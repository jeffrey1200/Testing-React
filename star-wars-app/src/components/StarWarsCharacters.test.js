import React from 'react'

import {getData as mockGetData} from '../api'
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters'

// jest.mock('../api')


test('Testing if the component renders and prev/next buttons are working', ()=> {

    const {getByText} = render(<StarWarsCharacters/>)
    const goToPreviousButton = getByText(/Previous/i)
    const goToNextButton = getByText(/Next/i)

    fireEvent.change(goToPreviousButton)
    fireEvent.change(goToNextButton)


    // getByText('useEffect')




})