export const API_KEY='AIzaSyCF2XKZ2Rvr5n_6_pS6EN-KwY7C6PURwjk'

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}