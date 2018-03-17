// import 'jsdom-global/register';
import React from 'react';
import {mount, shallow} from 'enzyme';
import moxios from 'moxios';
import sinon from 'sinon';
import {expect} from 'chai';
import Slideshow from './Slideshow.js';

describe('Slideshow', () => {

  const sampleSizes = [
    {label: "Square", width:"75", height: "75", source: "http://farm2.staticflickr.com/1103/567229075_2cf8456f01_s.jpg", url: "http://www.flickr.com/photos/stewart/567229075/sizes/sq/", media: "photo"},
    {label:"Medium", width:"500", height:"375", source:"http://farm2.staticflickr.com/1103/567229075_2cf8456f01.jpg", url:"http://www.flickr.com/photos/stewart/567229075/sizes/m/", media:"photo"},
    {label:"Large", width:"1024", height:"768", source:"http://farm2.staticflickr.com/1103/567229075_2cf8456f01_b.jpg", url:"http://www.flickr.com/photos/stewart/567229075/sizes/l/", media:"photo"},
  ];

  const sampleImage = {id: '567229075', owner: '59717246@N05', secret: '2cf8456f01', server: '1103', farm: 2};

   let wrapperSlide;
   const galleryWidth = 1920;
   const galleryHeight = 1080;

   const mountSlideshow = () => {
     return shallow(
       <Slideshow dto={sampleImage} large={false} galleryWidth={galleryWidth} galleryHeight={galleryHeight}/>,
       {lifecycleExperimental: true, attachTo: document.createElement('div')}
     );
   };

  //  beforeEach(() => {
  //    wrapper = mountSlideshow();
  //  });
   beforeEach(() => {
    wrapperSlide = mount(
      <Slideshow dto={sampleImage} large={false} galleryWidth={galleryWidth} galleryHeight={galleryHeight}/>,
      {attachTo: document.createElement('div')}
    );
  });
    it('renders', () => {
    expect(wrapperSlide).to.not.be.undefined;
  });

it('gets sizes for the image', done => {
    // moxios.install();
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: {
    //       sizes: {
    //         size: sampleSizes
    //       }
    //     }
    //   }).then(() => {
    //     //console.log(sampleSizes.length)
    //     //expect(wrapperSlide.state().sizes.length); // why does it say undefined to equal 'test4'? test4 is in the app.js test ...cant find explanation
    //     //done();
    //     moxios.uninstall();
    //   });
    // });
    // wrapperSlide = mount(
    //   <Slideshow dto={sampleImage} large={false} galleryWidth={galleryWidth} galleryHeight={galleryHeight}/>,
    //   {attachTo: document.createElement('div')}
    // );
  });
  // it('render 3 icons on each image', () => {
  //   expect(wrapper.find('FontAwesome').length).to.equal(3);
  // });

  // it('calc image size on mount', () => {
  //   const spy = sinon.spy(Image.prototype, 'calcImageSize');
  //   wrapper = mountImage();
  //   expect(spy.called).to.be.true;
  // });

  // it('calculate image size correctly', () => {
  //   const imageSize = wrapper.state().size;
  //   const remainder = galleryWidth % imageSize;
  //   expect(remainder).to.be.lessThan(1);
  // });

});
