/**
 * Sort ascending given objects by value of id properties
 * @param {Object} objectA 
 * @param {Object} objectB
 * @returns {Number}
 */
export const compare =(objectA,objectB)=>{
    if(objectA.id < objectB.id){
        return -1
    }
    if(objectA.id > objectB.id){
        return 1
    }
    return 0
}

