import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VoteButton from '../../src/VoteButton.js';
import Wrapper from '../../src/Wrapper.js'
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

describe('Inital test', () => {
  it('should render a Vote Hot component in isolation', () => {
    const wrapper = mount(
      <VoteButton
        buttonID={'HotButton'}
        className={'Hot Class'}
        buttonText={'Hot'}
      />
    );
    //  console.log(wrapper.debug());
    expect(wrapper.find('[id="HotButton"]').text()).toEqual('Vote Hot!');
  });

  it('should render a Vote Hot component in Wrapper', () => {
    const wrapper = mount(
      < Wrapper
      />
    );
     // console.log(wrapper.debug());
    expect(wrapper.find('[id="HotButton"]').text()).toEqual('Vote Hot!');
  });

  it('should click vote hot button and vote goes up', (done) => {
    const wrapper = mount(<Wrapper />);
    // console.log(votingButton.toJSON())
    wrapper.find('[id="HotButton"]').simulate('click');

    // var fooThing = function() {
    //   console.log("1")
    //   axios
    //     .get('http://google.com')
    //     .then(response => {
    //       console.log("bar")
    //       return response
    //     })
    //     .catch(error => {
    //       console.log("fuck", error);
    //       return error
    //     });
    // }
    // console.log(fooThing())

    // const votingButton.voteDisplay

    // console.log(votingButton.currentVote)
    // console.log(wrapper.debug())
    expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual(
      'Current votes for Hot: 1'
    );
    done()
  });
});
