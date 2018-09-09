import React from 'react';
import {shallow,mount} from 'enzyme';

import TopNav from './top-nav';

describe ('<TopNav />', () => {

        it('Renders', ()=>{
            shallow(<TopNav />);
        })
            
        it('Starts a new game on New Game', ()=>{


            const callback = jest.fn
            const wrapper = shallow(<TopNav onRestartGame={callback}/>)
            const link = wrapper.find('.new');
            link.simulate('click', {
                    preventDefault() {}
                });
            expect(callback).toHaveBeenCalled();

            

        })
            
        

})