/**
 *  A password protect to webpages
 *
 *  This program is a javascript version of a website page lock
 *  It prompts for a password, if the password entered is correct, the user is 
 *  allowed in the page, otherwise the user is brought back to the page before 
 *  he or she click the page of protected link
 *  
 *  used in MsVerinna's classroom website: MsVerinna.weebly.com
 *  @author: Jeffrey Wu
 *  @version: 2.0 
 *  8/25/2015
 *
 *  syntax:
 *  <script src='http://msverinna.weebly.com/files/theme/cookies.js'></script>
 *  <script src="http://msverinna.weebly.com/files/theme/siteLock.js"></script>
 *  <SCRIPT language = "JavaScript" > siteLock(); </SCRIPT>
 * 
 *
 *
 *  History: 
 *  version 1.0: 8/25/2015 
 *    ask password if the protected page is not from the source page
 *    result in too many password prompts
 *  version 2.0: 8/27/2015
 *    uses cookies to remember a 30 min time period before another password 
 *    reprompt
 *    result in a less tedious system yet almost similarly secure
 */

var password = "tulip"; // default password
var sessionTime = 30; // time of unlock (in minutes)

/**
 *   Import MDN Cookie Library
 *   ** only setItem and hasItem is used
 *   https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 *
 *   This framework is released under the GNU Public License, version 3 or later.
 *   http://www.gnu.org/licenses/gpl-3.0-standalone.html
 */
var docCookies = {
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
};


/**
 * Prompts for password to locked site,
 * if successful, store a cookie of 30 min of no reprompt
 * if fail, jumps back to page before entering locked site
 * 
 */
function siteLock() {
  if (!isLoggedIn()) {
    var userPass = prompt('Please enter password to view this page', ' ');

    if (userPass != password) {
      history.back(); // goes back to old page
    } else { // set cookie if correct
      setLoggedIn();
    }
  }
}

/**
 * Sets a cookie of 30 min 
 * to prevent users from having to enter password again
 */
function setLoggedIn() {
  // sets a cookie of logged in status for 30 min
  var unlockTime = 60 * sessionTime;
  docCookies.setItem("isLoggedIn", "true", unlockTime, undefined, undefined, 
    undefined);
}

/**
 * Is logged in
 * Checks if the cookie that stores log in is alive
 * @return true if cookie exists
 */
function isLoggedIn() {
  return docCookies.hasItem("isLoggedIn");
}

/**
 *  Runs site lock
 */

siteLock(); // runs siteLock function



