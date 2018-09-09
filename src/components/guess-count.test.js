import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessCount from './guess-count';

describe ('<GuessCount />', () => {

        it('keeps a guesscount', ()=>{
            const wrapper = shallow(<Feedback guessCount={1} />);
            expect(wrapper.hasId('guessCount')).toEqual(true);
            expect(wrapper.find('h2').text()).to.contain.text('guess')
            
        })
        it('Displays number of guesses', ()=>{
            const wrapper = shallow(<Feedback guessCount={1} />);
            expect(wrapper.find('h2 span')).to.contain.number(1)
            
        })
        it('changes to guesses on guesses more than 1', ()=>{
            const wrapper = shallow(<Feedback guessCount={2} />);
            expect(wrapper.find('h2').text()).to.contain.text('guesses')
            
        })

})