function sc(s) {
  let x = '';
  for (i in s) {
    let t = s[i];
    if (s.match(t.toUpperCase()) && s.match(t.toLowerCase())) {
      x += t;
    }
  }
  return x;
}

//	maybe it's a best practice? HA
