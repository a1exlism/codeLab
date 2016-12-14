function sc(s){
	var alphabet = '';
	for( let i = 0; i < 26; i ++){
		alphabet += String.fromCharCode(97+i);
	}
	s = s.split('');
	for ( let i = 0; i < 26; i ++ ){
		let str = s.join('');
		if ( str.match(alphabet[i] ) && str.match(alphabet[i].toUpperCase()) || !str.match(alphabet[i] ) && !str.match(alphabet[i].toUpperCase()) ){
			;
		}else{
			let del_index = str.indexOf(alphabet[i]);
			if( del_index == -1){
				del_index = str.indexOf(alphabet[i].toUpperCase());
			}
			console.log( del_index );
			s.splice( del_index, 1 );
		}
	}
	return s.join('');
}

/*
*	错误例子
*
 */
function sc(s){
	var alphabet = '';
	for( let i = 0; i < 26; i ++){
		alphabet += String.fromCharCode(97+i);
	}
	s = s.split('');
	for ( let i = 0; i < 26; i ++ ){
		let str = s.join('');
		if ( str.match(alphabet[i] ) && str.match(alphabet[i].toUpperCase()) || !str.match(alphabet[i] ) && !str.match(alphabet[i].toUpperCase()) ){
			;
		}else{
			console.log( i);
			console.log( alphabet[i]  + '\n');
			let del_index = str.indexOf(alphabet[i] || str.indexOf(alphabet[i].toUpperCase()) );
			s.splice( del_index, 1 );
		}
	}
	return s.join('');
}

//	solutions--1
function sc(s) {
    r = "";
    for (i in s)
    	c = s[i],
    	s.match(c.toUpperCase()) && s.match(c.toLowerCase()) ? r += c: 0
    return r;
}

//	solutions--2
function sc(e) {
    for (i = 0, r = ""; i < e.length;)
    	r +=
    		e.indexOf((c = e[i++]) < "a" ? c.toLowerCase() : c.toUpperCase()) 
    			> -1 ? c: "";
    return r
}