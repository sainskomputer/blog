var thumbnail_mode = "yes";
summary_noimg = 300;
summary_img = 350;
img_thumb_height = 200;
img_thumb_width = 300;

//<![CDATA[
function removeHtmlTag(strx,chop) {
  if (strx.indexOf("<")!=-1) {
    var s = strx.split("<");
    for (var i=0;i<s.length;i++) {
      if (s[i].indexOf(">")!=-1) {
        s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
      }
    }
    strx = s.join("");
  }
  chop = (chop < strx.length-1) ? chop : strx.length-2;
  while (strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
    strx = strx.substring(0,chop-1);
    return strx+'...';
}
function createSummaryAndThumb(pID) {
  var div = document.getElementById(pID);
  var imgtag = "";
  var img = div.getElementsByTagName("img");
  var summ = summary_noimg;
  if (img.length>=1) {
    imgtag = '<div class="post-thumb"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height +'px"/></div>';
    summ = summary_img;
  }
  var summary = imgtag + '<div class="post-summary">' + removeHtmlTag(div.innerHTML,summ) + '</div>';
  div.innerHTML = summary;
}
//]]>
