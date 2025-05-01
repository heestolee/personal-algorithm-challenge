/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

export default function domainName(url) {
  const parser = {
    value: url,

    trimProtocol() {
      if (this.value.startsWith("https://")) {
        this.value = this.value.slice(8);
      } else if (this.value.startsWith("http://")) {
        this.value = this.value.slice(7);
      }
      return this;
    },

    trimW3() {
      if (this.value.startsWith("www.")) {
        this.value = this.value.slice(4);
      }
      return this;
    },

    getDomain() {
      const dotIndex = this.value.indexOf(".");
      this.value = this.value.slice(0, dotIndex);
      return this;
    },

    result() {
      return this.value;
    },
  };

  return parser.trimProtocol().trimW3().getDomain().result();
}
