import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessForm from './guess-form';

describe ('<GuessForm />', () => {

        it('renders properly', ()=>{
            const wrapper = shallow(<GuessForm />);
            expect(wrapper.hasId('guess-form')).toEqual(true);
            expect(wrapper.find('form').exists()).toEqual(true)
            
        })
        it('Has a submit button', ()=>{
            const wrapper = shallow(<GuessForm />);
            expect(wrapper.find('button').exists()).toEqual(true)
            
        })
        

})