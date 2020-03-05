createDocument = function () {
  const scr = document.createElement("script");
  scr.type = "text/javascript";
  scr.src = "http://plm2.xinri.com/Windchill/app/";
  document.getElementsByTagName('body')[0].appendChild(scr);
  document.getElementById('demo').innerText = scr.src;
};