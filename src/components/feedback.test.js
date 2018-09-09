import React from 'react';
import {shallow,mount} from 'enzyme';

import Feedback from './feedback';

describe ('<Feedback />', () => {

        it('Gives feedback on a guess', ()=>{
            const wrapper = shallow(<Feedback feedback='hello' />);
            expect(wrapper.hasId('feedback')).toEqual(true);
            expect(wrapper.find('h2').text()).to.contain.text('hello')
            
        })
        it('Gives feedback on a guess if guesscount is not 0', ()=>{
            const wrapper = shallow(<Feedback guessCount={1} />);
            expect(wrapper.find('h2 span').exists()).to.equal(true)
            
        })
        it('Does not have a span for guesscount 0', ()=>{
            const wrapper = shallow(<Feedback guessCount={0} />);
            expect(wrapper.find('h2 span').exists()).to.equal(false)
            
        })

})