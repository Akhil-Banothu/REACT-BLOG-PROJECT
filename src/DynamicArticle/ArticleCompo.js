import React, { useContext } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Store } from '../MainComponents/StoreCompo';
import ScrollToTop from 'react-scroll-to-top';

const ArticleCompo = () => {
   const id = useParams().id;
   const [content] = useContext(Store)

   const [articleDetail] = content.filter((name) => name.id === parseInt(id))

   const authorName = articleDetail.author;

   const Navi = useNavigate();

   return (
      <div>
         {content.filter((data) => data.id === parseInt(id)).map((item, index) => {
            return (
               <div className="main-article" key={index}>
                  <h2>{item.heading}</h2>
                  <div className="author-details">
                     <div className="author">
                        <div className="author-image"></div>
                        <div className="author-name">
                           <h4>{item.author}</h4>
                           <p>{item.date}</p>
                        </div>
                     </div>
                     <div className="icons">
                        <i className="fa-brands fa-square-facebook common"></i>
                        <i className="fa-brands fa-square-twitter common"></i>
                        <i className="fa-brands fa-square-instagram common"></i>
                        <i className="fa-brands fa-youtube common"></i>
                     </div>
                  </div>

                  <img src={item.url} className="article-image" alt={item.alternate} />

                  <p className="paragraph">{item.description}</p>
                  <p className="paragraph">{item.description2}</p>
                  <p className="paragraph">{item.description3}</p>

                  <div className='article-share'>
                     <div className='share'>
                        <div className='share-image1'></div>
                        <p className='text'>9.3K</p>
                     </div>
                     <div className='share'>
                        <div className='share-image2'></div>
                        <p className='text'>Share this article</p>
                     </div>
                  </div>

                  <div className="author-details2">
                     <div className="author">
                        <div className="author-image"></div>
                        <div className="author-name">
                           <p>WRITTEN BY</p>
                           <h4>{item.author}</h4>
                           <p>{item.date}</p>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}

         <button className='btn-back' onClick={() => { Navi(-1) }}>Back</button>

         <div className="related-articles">
            <h3>More from The Siren</h3>
            <hr className='article-decoration' />

            <div className="box2">
               <ScrollToTop />
               {content.filter((data) => data.author === authorName && data.id !== parseInt(id)).map((item, index) => {
                  return (
                     <div key={index} className='more-articles'>
                        <h4>Related reads</h4>
                        <NavLink className='nav-seperate' to={`/article/${item.id}`}>
                           <img src={item.url} alt={item.alternate} />
                           <div className='box3'>
                              <h2>{item.heading.substr(0, 30)} ...</h2>
                              <div className="author">
                                 <div className="author-image"></div>
                                 <div className="author-name">
                                    <h4>{item.author}</h4>
                                    <p>{item.date}</p>
                                 </div>
                              </div>
                           </div>
                        </NavLink>

                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   )
}

export default ArticleCompo