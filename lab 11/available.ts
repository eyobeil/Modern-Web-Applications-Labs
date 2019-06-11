export function addAvailability(val){
    return function(Object){
        return class{
            avalilable=true;
        }
    }
}