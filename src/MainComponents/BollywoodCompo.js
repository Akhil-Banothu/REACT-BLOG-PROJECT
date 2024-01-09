import React, { useContext } from 'react'
import { Store } from './StoreCompo'
import { NavLink } from 'react-router-dom'


const BollywoodCompo = () => {

  const [Data] = useContext(Store)

  return (
    <div className="article-container">
      <div className="article-category">
        <h2>Bollywood</h2>
        <hr className="article-decoration" />
        {Data.filter((article) => article.footer === 'Bollywood').map((item, index) => {
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
        {Data.filter((article) => article.content === 'Bollywood1').map((item, index) => {
          return (
            <div key={index}>
              <NavLink className="top" to={`/article/${item.id}`}>
                <img className='top-post-one-image' src={item.url} alt={item.alternate}/>
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

        {Data.filter((article) => article.footer === 'BollywoodTP').map((item, index) => {
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
          <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/mx-player-an-original-series-bollywood-buzzinga-ad-delhi-times-12-05-2019.png" alt='Bollywood advertisement page' />
        </div>
      </div>

    </div >
  )
}

export default BollywoodCompo