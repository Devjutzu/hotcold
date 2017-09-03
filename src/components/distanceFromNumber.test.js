import React from 'react';
import { shallow, mount } from 'enzyme';

import DistanceFromNumber from "./distanceFromNumber"
const wrapper = shallow(<DistanceFromNumber />)
describe('<DistanceFromNumber/>', () => {
    it('Renders without crashing', () => {
        wrapper
    })
})