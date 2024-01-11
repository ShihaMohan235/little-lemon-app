import Rating from '@mui/material/Rating';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

function TestimonialCard() {
    const testimonialQuotes = [
        {
            image: '/assets/sara.jpeg',
            author: 'Sarah Taylor',
            quote: 'The food at Little Lemon is absolutely delicious! I keep coming back for more.',
            rating: 5
        },
        {
            image: '/assets/john.jpeg',
            author: 'John Snow',
            quote: 'The cozy atmosphere and friendly staff make dining at Little Lemon a delightful experience.',
            rating: 4
        },
        {
            image: '/assets/mariya.jpeg',
            author: 'Mariya Jane',
            quote: 'I always have a great time at Little Lemon. The service is fantastic, and the atmosphere is cozy.',
            rating: 5
        },
        {
            image: '/assets/william.jpeg',
            author: 'William Smith',
            quote: 'The food at Little Lemon is a culinary delight! Each dish tells a story of flavor and freshness.',
            rating: 5
        }
    ];

    const [activeStep, setActiveStep] = useState(1);
    
    const handlePrev = () => {
      activeStep === 0? setActiveStep(testimonialQuotes.length -1): setActiveStep(activeStep - 1);
    }
  
    const handleNext = () => {
      activeStep === testimonialQuotes.length-1? setActiveStep(0): setActiveStep(activeStep + 1);
    }

    const testimonialCard = testimonialQuotes.map((item, index) => {
        return (
            <article className={activeStep === index? 'active testimonial': 'testimonial'} key={item.author} style={{
                display: (activeStep === index)?'':'none'}}>
                <div className='testimonial-img-section'>
                    <img src={item.image} height="150" alt={item.author} />
                </div>
                <div className='testimonial-content-section'>
                <Rating name="read-only" value={item.rating} readOnly />
                    <div className="testimonial-name">
                        <h4>
                            {item.author}
                        </h4>
                    </div>
                    <p className="testimonial-quote"><FormatQuoteOutlinedIcon/>{item.quote}</p>
                </div>
            </article>
        )
    })
    return (
        <>
        {testimonialCard}
        <div className='move-icons'>
        <KeyboardArrowLeftIcon style={{margin: '8px'}} onClick={handlePrev}></KeyboardArrowLeftIcon>
        <KeyboardArrowRightIcon style={{margin: '8px'}} onClick={handleNext}></KeyboardArrowRightIcon>
        </div>
        </>
    );
}

export default TestimonialCard;