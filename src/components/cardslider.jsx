import React from 'react'
import './card.css';

export default function cardslider() {
    
      // const languages = [
      //   {
      //     lookup_key: "tamil",
      //     title: "Tamil",
      //     sub_title: "Tamil",
      //     thumbnail_url:
      //       "https://i.pinimg.com/originals/c2/6e/84/c26e847d283bcded8815ae819ab0b727.jpg"
      //   },
      //   {
      //     lookup_key: "english",
      //     title: "English",
      //     sub_title: "English",
      //     thumbnail_url:
      //       "https://i0.wp.com/b.englishninjas.com/wp-content/uploads/2017/06/three-important-reasons-for-learning-english.jpg?fit=2566%2C1442&ssl=1"
      //   },
      //   {
      //     lookup_key: "malayalam",
      //     title: "Malayalam",
      //     sub_title: "Malayalam",
      //     thumbnail_url:
      //       "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c190cd68679475.5b800790d9c4d.jpg"
      //   },
      //   {
      //     lookup_key: "telugu",
      //     title: "Telugu",
      //     sub_title: "Telugu",
      //     thumbnail_url:
      //       "https://assets.thehansindia.com/h-upload/2021/07/13/1088241-telugu.webp"
      //   },
      //   {
      //     lookup_key: "kannada",
      //     title: "Kannada",
      //     sub_title: "Kannada",
      //     thumbnail_url:
      //       "https://pbs.twimg.com/media/DlM-BSDWsAABr9l?format=jpg&name=small"
      //   },
      //   {
      //     lookup_key: "hindi",
      //     title: "Hindi",
      //     sub_title: "Hindi",
      //     thumbnail_url:
      //       "https://m.economictimes.com/thumb/msid-72136111,width-1200,height-900,resizemode-4,imgsize-361723/hindi-thnkstck.jpg"
      //   },
      //   {
      //     lookup_key: "sanskrit",
      //     title: "Sanskrit",
      //     sub_title: "Sanskrit",
      //     thumbnail_url:
      //       "https://i.pinimg.com/originals/15/d8/dc/15d8dcfa774d457327e656d5629f0702.jpg"
      //   },
      //   {
      //     lookup_key: "bengali",
      //     title: "Bengali",
      //     sub_title: "Bengali",
      //     thumbnail_url:
      //       "https://i.pinimg.com/originals/ae/3d/e7/ae3de70cec5dfbd06b6402d78b795f78.jpg"
      //   }
      // ];

    return (
      <div className="cards-list">
       
        <div className="box">
         <img className="img-box" src='https://i.pinimg.com/originals/c2/6e/84/c26e847d283bcded8815ae819ab0b727.jpg'></img>
         <p href='#' className='courses-lang'>Tamil</p>
         <p href='#' className='courses-list'>Courses 17</p>
        </div> 
        <div className="box">
        <img className="img-box" src='https://i0.wp.com/b.englishninjas.com/wp-content/uploads/2017/06/three-important-reasons-for-learning-english.jpg?fit=2566%2C1442&ssl=1'></img>
        <p href='#' className='courses-lang'>English</p>
        <p href='#' className='courses-list'>Courses 20</p>
        </div> 
        <div className="box">
        <img className="img-box" src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c190cd68679475.5b800790d9c4d.jpg'></img>
        <p href='#' className='courses-lang'>Malayalam</p>
        <p href='#' className='courses-list'>Courses 14</p>
        </div> 
        <div className="box">
        <img className="img-box" src='https://pbs.twimg.com/media/DlM-BSDWsAABr9l?format=jpg&name=small'></img>
        <p href='#' className='courses-lang'>Kanada</p>
        <p href='#' className='courses-list'>courses 15</p>
        </div> 
        <div className="box">
        <img className="img-box" src='https://i.pinimg.com/originals/ae/3d/e7/ae3de70cec5dfbd06b6402d78b795f78.jpg'></img>
        <p href='#' className='courses-lang'>Bengali</p>
        <p href='#' className='courses-list'>courses 16</p>
        </div> 
        
        
       </div> 
    )
}
