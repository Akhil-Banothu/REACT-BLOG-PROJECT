import React, { useContext } from 'react'
import { Store } from './StoreCompo'
import { NavLink } from 'react-router-dom'

const HollywoodCompo = () => {
  const [Data] = useContext(Store)

  return (
    <div className="article-container">
      <div className="article-category">
        <h2>Hollywood</h2>
        <hr className="article-decoration" />
        {Data.filter((article) => article.footer === 'Hollywood').map((item, index) => {
          return (
            <div key={index} className="box">
              <NavLink className="article" to={`/article/${item.id}`}>
                <img className="article-image" src={item.url} alt={item.alternate} />
                <div className="article-content">
                  <h3>{item.heading.substr(0, 60)} ...</h3>
                  <p className="article-description">{item.description.substr(0, 90)} ...</p>
                  <p className="article-author">{item.author} <span className="article-date"> / {item.date}</span></p>
                </div>
              </NavLink>
              <hr className="content-decoration" />
            </div>
          )
        })}
      </div>



      <div className="article-top-post">
        <h2>Top Posts</h2>
        <hr className="article-decoration" />
        {Data.filter((article) => article.content === 'Hollywood1').map((item, index) => {
          return (
            <div key={index}>
              <NavLink className="top" to={`/article/${item.id}`}>
                <img className='top-post-one-image' src={item.url} alt={item.alternate} />
                <div className='top-post-one-content'>
                  <div className='content'>
                    <h3>{item.heading.substr(0, 50)} ...</h3>
                    <p className="article-author">{item.author} <span className="article-date"> / {item.date}</span></p>
                  </div>
                  <div className='number'>
                    {item.number}
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}

        {Data.filter((article) => article.footer === 'HollywoodTP').map((item, index) => {
          return (
            <div key={index}>
              <NavLink className="top-post" to={`/article/${item.id}`}>
                <hr className="content-decoration" />
                <div className='top-post-content'>
                  <img src={item.url} alt={item.alternate} />
                  <div className='description'>
                    <h3>{item.heading.substr(0, 50)} ...</h3>
                    <p className="article-author">{item.author} <span className="article-date"> / {item.date}</span></p>
                  </div>
                  <div className='number'>
                    {item.number}
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}

        <div className='advertisement'>
          <img src="https://rukminim2.flixcart.com/image/850/1000/kkyc9zk0/book/t/n/v/hollywood-b-movies-original-imagy6f7csa4xwnb.jpeg?q=20" alt='Hollywood advertisement component' />
        </div>
      </div>

      
    </div >
  )
}

export default HollywoodCompo