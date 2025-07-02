import './Carousel.css'
import {useDeviceDetect} from "../global_vars.jsx";
import {useEffect, useState} from "react";

function Carousel(props) {

    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const [swipePos, setSwipePos] = useState(0)

    const l_display = useDeviceDetect().isMobile ? 'none'
                                : currentIndex > 0 ? 'inline' : 'none';
    const r_display = useDeviceDetect().isMobile ? 'none'
                                : currentIndex < length-1 ? 'inline' : 'none';

    const next = () => {
        if (currentIndex < (length-1)) {
            setCurrentIndex(prevState => prevState+1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState-1)
        }
    }

    const touch = (e) => {
        setSwipePos(e.targetTouches[0].clientX);
    }

    const move = (e) => {
        const pos = swipePos;

        if (pos == null) {
            return
        }

        const current = e.touches[0].clientX;

        const diff = pos - current;

        const rem = 12;

        if (diff > rem) next();
        else if (diff < -rem) prev();

        setSwipePos(null)
    }

    const release = () => {

        const threshold = children.offsetWidth * 0.2;

        if (swipePos > threshold) {
            next()
        } else if (swipePos < -threshold) prev()

        //setSwipeStart(null)
    }

    function _transform() {

        //const diff = swipePos-swipeStart

        if (swipePos) {
            return `translateX(-${currentIndex * 100}%)`;
        }
        else {
            return `translateX(calc(-${currentIndex * 100}% + ${swipePos}px))`;
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
      <div id={useDeviceDetect().car_container}>
          <div className={'car-wrapper'}>
              <button className={useDeviceDetect().arr_left}
                    onClick={prev}
                    style={{display: l_display}}>
                  &lt;
              </button>
              <div className={'car-content-wrapper'}>
                  <div className={'car-image'} style={{
                      transform: `translateX(-${currentIndex * 100}%)`
                      /*transition: a ? 'none' : 'transform 0.5s ease-in-out'*/}}
                       onTouchStart={touch}
                       onTouchMove={move}
                       onTouchEnd={release}>
                    {children}
                  </div>
            </div>
              <button className={useDeviceDetect().arr_right}
                    onClick={next}
                    style={{display: r_display}}>
                  &gt;
              </button>
          </div>
      </div>
    );
}

export default Carousel