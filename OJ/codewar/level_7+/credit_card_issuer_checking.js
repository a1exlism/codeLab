function getIssuer(number) {
	number = number.toString();
	var header_amex = /^(34)|(37)/;
	var header_dicover = /^6011/;
	var header_master = /^5[1-5]/;
	var header_visa = /^4/;
	switch( number.length ){
		case 15:
			if( number.match(header_amex) ){
				return 'AMEX';
			}
			break;
		case 16:
			if( number.match(header_dicover) ){
				return 'Discover';
			}else if( number.match(header_master) ){
				return 'Mastercard';
			}else if( number.match(header_visa ) ){
				return 'VISA';
			}
			break;
		case 13:
			if( number.match(header_visa) ){
				return 'VISA';
			}
			break;
		default:
			return 'Unknown';
	}
	return 'Unknown';
}

//	推荐
function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}