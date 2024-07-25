'use client';

import React from 'react'
import {DotButton, useDotButton} from './CarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButtons'
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'

const Carousel = (props) => {
    const {slides, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {selectedIndex, scrollSnaps, onDotButtonClick} =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla lg:w-fit md:w-8/12 sm:w-10/12">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => (
                        <div className="embla__slide" key={slide.index}>
                            <Image width="780"
                                   height="100"
                                   src={"/assets/img/slide" + (slide.index) +".png"} alt="Speak Up"/>
                            <div className="embla__slide__number">
                                <p>{slide.text}</p>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel
