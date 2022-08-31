/**
 * Returns number between a new range.
 * @param {number} number 
 * @param {number} inMin 
 * @param {number} inMax 
 * @param {number} outMin 
 * @param {number} outMax 
 * @returns {number}
 */
const scale =  (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

/**
 * Returns arbitrary number between min and max.
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const randomIntFromInterval = (min, max) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const findAngle = (A,B,C) => {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB)) * 180 / Math.PI;
}

export {
    scale,
    getRandomArbitrary,
    randomIntFromInterval,
    isMobile,
    findAngle
};