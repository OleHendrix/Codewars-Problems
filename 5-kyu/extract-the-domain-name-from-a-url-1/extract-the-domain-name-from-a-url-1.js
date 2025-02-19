function domainName(url)
{
  let newurl;
  if (url.startsWith("https://www."))
    newurl = url.slice(("https://www.").length);
  else if (url.startsWith("http://www."))
    newurl = url.slice(("http://www.").length);
  else if (url.startsWith("https://"))
    newurl = url.slice(("https://").length);
  else if (url.startsWith("http://"))
    newurl = url.slice(("http://").length);
  else if (url.startsWith("www."))
    newurl = url.slice(("www.").length);
  else
    newurl = url;
  newurl = newurl.slice(0, newurl.indexOf('.'))
  return (newurl);
}