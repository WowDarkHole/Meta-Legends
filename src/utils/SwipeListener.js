import { findAngle } from "./helper";

export default class SwipeListener {
    constructor(){
        this.isClockRunning = false;
        this.startTouchPos = {x: 0, y: 0};
        this.touchPos = {x: 0, y: 0};
        this.initListener();
    }
    initListener(){
        document.addEventListener('touchstart', e => {
            this.onTouchStart(e);
        }, false)
        document.addEventListener('touchmove', e => {
            if(!this.isClockRunning) return;
            this.onTouchMove(e)
        }, false)
        document.addEventListener('touchend', e => {
            if(!this.isClockRunning) return;
            this.onTouchEnd();
        })
    }
    onTouchStart(e){
        if(!this.isClockRunning) {
            this.startTouchPos.x = Math.round(e.touches[0].clientX);
            this.startTouchPos.y = Math.round(e.touches[0].clientY);
            this.startClock(1);
        }
    }
    onTouchMove(e){
        this.touchPos.x = Math.round(e.touches[0].clientX);
        this.touchPos.y= Math.round(e.touches[0].clientY);

    }
    onTouchEnd(){
        this.checkSwipeDirection();
    }
    startClock(seconds){
        let start = 0;
        this.isClockRunning = true
        const clock = setInterval(() => {
            start += 1;
            if(start === seconds) {
                clearInterval(clock);
                this.isClockRunning = false;
            }
        }, 500);
        
    }
    checkSwipeDirection(){
        const ptA = {x: this.startTouchPos.x + 1, y: this.startTouchPos.y};
        const ptB = {x: this.startTouchPos.x, y: this.startTouchPos.y};
        const ptC = {x: this.touchPos.x, y: this.touchPos.y};
        const angle = Math.round(findAngle(ptA, ptB, ptC));

        if(angle <= 45 || angle >= 315) {
            const swipeRightEvent = new CustomEvent('swipe', {detail: 'right'})
            document.dispatchEvent(swipeRightEvent);
        } else if (angle >= 136 && angle <= 225) {
            const swipeLeftEvent = new CustomEvent('swipe', {detail: 'left'})
            document.dispatchEvent(swipeLeftEvent);
        } else if(this.startTouchPos.y > this.touchPos.y) {
            const swipeUpEvent = new CustomEvent('swipe', {detail: 'up'})
            document.dispatchEvent(swipeUpEvent);
        } else if (this.startTouchPos.y < this.touchPos.y) {
            const swipeDownEvent = new CustomEvent('swipe', {detail: 'down'})
            document.dispatchEvent(swipeDownEvent);
        }
    }
}