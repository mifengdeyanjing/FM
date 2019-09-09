import React, { Component } from 'react';

import ReactSwiper from 'reactjs-swiper';

const ReactSwiperExample = () => {
  const items = [{
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567769730650&di=efcfbd3bfc0ffbe207458028c9dc17e3&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb7003af33a87e9508c5f51bc1e385343faf2b492.jpg',
    title: '图片1',
    link: 'http://jd.com'
  }, {
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567769783768&di=ab5d2100b3a0e7d9891cc7a04f25a543&imgtype=0&src=http%3A%2F%2Fupload.trends.com.cn%2F2015%2F0608%2F1433732426876.jpg',
    title: '图片2',
  }, {
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567769801418&di=f0628e973244274fb8df703e023a1bfb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201502%2F03%2F20150203125729_v2JA5.thumb.700_0.jpeg',
    title: '图片3',
    link: 'http://jd.com'
  }, {
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567769827897&di=075974837f3e1d67e465878160b57ddd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F11%2F20150311140613_8QCBK.jpeg',
    title: '图片4',
  }];
 
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
      className="swiper-example" />
  );
};

export default ReactSwiperExample