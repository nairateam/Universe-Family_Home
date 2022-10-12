import React, { useState } from 'react';
import people from '../data';
import './Review.css'
import backImg from '../IMAGES/backbtn.svg'
import nextImg from '../IMAGES/nextbtn.svg'
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(checkNumber(randomNumber));
  }

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  return (
    <section className="review__sect">
        <div className="test__intro">
            <p>Testimonials</p>
            <h4>Opinions about <span>Universe Family Home</span></h4>
            <p>Read what others have to say about us...</p>
        </div>
            <article className='review'>
      {/* <div className="img-container">
        <span className="quote-icon">
      </span>
      </div> */}
      <p className="info">{text}</p>
      <div className="btntest">
        <div className="tester">
        <img src={image} alt="{name}" className='person-img' />
            <span>
            <h4 className="author">{name}</h4>
            <p className='jobs'>{job}</p>
            </span>
        </div>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          {/* <img src={backImg} alt="" /> */} prev
        </button>
        <button className="next-btn" onClick={next}>
          {/* <img src={nextImg} alt="" /> */} next
        </button>
      </div>
      </div>
    </article>
    </section>
  )
};

export default Review;
