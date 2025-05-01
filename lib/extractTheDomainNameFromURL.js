/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

export default function domainName(url) {
  let result = "";

  if (url.startsWith("https://")) {
    result = url.slice(8);
  } else if (url.startsWith("http://")) {
    result = url.slice(7);
  } else {
    result = url;
  }

  if (result.startsWith("www")) {
    result = result.slice(4);
  }

  const domainLength = result.indexOf(".");

  return result.slice(0, domainLength);
}
