import React, { useContext } from 'react'
import { Store } from './StoreCompo'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';


const HomeCompo = () => {

  const [content] = useContext(Store);


  return (
    <div className="home-components">
      <div className="part1-images">
        <div className="big-image1">
          {content.filter((data) => data.footer === 'HomeBigImage1').map((item, index) => {
            return (
              <NavLink key={index} to={`/article/${item.id}`}>
                <img src={item.url} alt={item.alternate} />
                <p className='title'>{item.heading}</p>
                <p className='author'>{item.author} / {item.date}</p>
              </NavLink>
            );
          })}
        </div>
        <div className="big-image2">
          {content.filter((data) => data.footer === 'HomeBigImage2').map((item, index) => {
            return (
              <NavLink key={index} className='box' to={`/article/${item.id}`}>
                <img src={item.url} alt={item.alternate} />
                <p className='title'>{item.heading.substr(0, 50)} ...</p>
                <p className='author'>{item.author} / {item.date}</p>
              </NavLink>
            )
          })}
        </div>
      </div>

      <div className='part1-images-mobile'>
        <Carousel axis='vertical' verticalSwipe='natural' >
          {content.filter((data) => data.footer1 === 'HomeBigImage').map((item, index) => {
            return (
              <NavLink key={index} className='carousel-image' to={`/article/${item.id}`}>
                <img src={item.url} alt={item.alternate} />
                <p className='title'>{item.heading}</p>
                <p className='author'>{item.author} / {item.date}</p>
              </NavLink>
            );
          })}
        </Carousel>
      </div>

      <div className='the-latest'>
        <h2>The Latest</h2>
        <hr className='decoration-line' />
        <div className='the-latest-box'>
          {content.filter((data) => data.footer === 'theLatest').map((item, index) => {
            return (
              <NavLink className='the-latest-article' key={index} to={`/article/${item.id}`} >
                <img src={item.url} alt={item.alternate} />
                <div className='author'>
                  <h3>{item.heading.slice(0, 45)} ...</h3>
                  <p>{item.description.slice(0, 200)} ...</p>
                  <div className='author-details'>{item.author} <span>/ {item.date} </span> </div>
                </div>
              </NavLink>
            );
          })}
        </div>

        <div className='latest-article'>
          <h2>Latest Articles</h2>
          <hr className='decoration-line' />
          <div className='latest-article-box'>
            <div className='part1'>
              <div>
                {content.filter((data) => data.footer2 === 'latestArticle').map((item, index) => {
                  return (
                    <NavLink key={index} to={`/article/${item.id}`} className='articles' >
                      <img src={item.url} alt={item.alternate} />
                      <div className='contents'>
                        <h3>{item.heading.slice(0, 60)} ... </h3>
                        <p>{item.description.slice(0, 90)} ...</p>
                        <div className='author-details'>{item.author} <span>/ {item.date} </span> </div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>

              <div className='image-slider2'>
                <Carousel axis='horizontal'>
                  {content.filter((data) => data.footer2 === 'latestArticle').map((item, index) => {
                    return (
                      <NavLink key={index} className='carousel-image' to={`/article/${item.id}`}>
                        <img src={item.url} alt={item.alternate} />
                      </NavLink>
                    );
                  })}
                </Carousel>
              </div>
            </div>

            <div className='part2'>
              <img src='https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bc96c3a63a9a0b05c67ed_kG4NxEiQcr0VRL2ko2cA.jpeg' alt='pizza hut' />

              <h2>Top Posts</h2>
              <hr className='decoration-line' />
              <div className='top-article1'>
                {content.filter((data) => data.content === 'Food1').map((item, index) => {
                  return (
                    <NavLink key={index} to={`/article/${item.id}`} className='top-article' >
                      <img src={item.url} alt={item.alternate} />
                      <div className='about'>
                        <div className='box1'>
                          <h3>{item.heading}</h3>
                          <div className='author-details'>{item.author} <span>/ {item.date} </span> </div>
                        </div>
                        <div className='box2'>
                          <p>{item.number}</p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>

              <div className='top-article2'>
                {content.filter((data) => data.footer4 === 'HomeTP2').map((item, index) => {
                  return (
                    <NavLink key={index} to={`/article/${item.id}`} className='article2'>
                      <img src={item.url} alt={item.alternate} />
                      <div className='box1'>
                        <h3>{item.heading.substr(0, 50)} ...</h3>
                        <div className='author-details'>{item.author} <span>/ {item.date} </span> </div>
                      </div>
                      <div className='box2'>
                        <p>{item.number}</p>
                      </div>
                    </NavLink>
                  );
                })}
              </div>




            </div>
          </div>
        </div>
      </div>


      <div className='latest-stories'>
        <h2>Latest Stories</h2>
        <hr className='decoration-line' />
        <div className='stories'>
          {content.filter((data) => data.footer3 === 'latestStories').map((item, index) => {
            return (
              <NavLink className='story' to={`/article/${item.id}`} key={index} >
                <h3>{item.heading.slice(0, 50)} ...</h3>
                <p>{item.description2.slice(0, 350)} ...</p>
                <div className='author-details'>{item.author} <span>/ {item.date} </span> </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeCompo

// < NavLink className = "article" to = {`/article/${item.id}`}>?