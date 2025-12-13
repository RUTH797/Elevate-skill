function vowel(str){
    let count = 0;
    for(let ch of str){
        if("aeiou".include(ch.lowercase())){
            count++;
        }
    }
    return count;
}
console.log(v("ruth"));