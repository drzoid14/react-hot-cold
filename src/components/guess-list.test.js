import React from 'react';
import {shallow,mount} from 'enzyme';

import GuesList from './guess-list';

describe ('<GuessList />', () => {

        it('renders properly', ()=>{
            const wrapper = shallow(<GuessList />);
            expect(wrapper.hasId('guess-list')).to.equal(true);
            
            
        })
        it('shows a list of guesses', ()=>{
            const wrapper = shallow(<GuessList guesses={[1,2]} />);
            expect(wrapper.find('h2 span')).to.contain(1,2)
            
        })


})