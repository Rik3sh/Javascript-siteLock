/**
 *  This program is a javascript version of a website page lock
 *  It prompts for a password, if the password entered is correct, the user is 
 *  allowed in the page, otherwise the user is brought back to the page before 
 *  he or she click the page of protected link
 *  Usually the end code result is obfuscated so it is harder to be find in the source code
 *  
 * 	used in MsVerinna's classroom website: MsVerinna.weebly.com
 *  @author: Jeffrey Wu
 *  @version: 1.0
 *  8/25/2015
 */


/**
 * 	Up to date version of k1 individual pages
 *  Obfuscated.
 */
<SCRIPT language = "JavaScript" >
<!--hide
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('0 3=8.9;2(3.7(\'d.6\')==-1){0 a;0 b="4";a=5(\'c e k l j f g\',\' \');2(a!=b)h.i()}',22,22,'var||if|z|tulip|prompt|html|indexOf|document|referrer|||Please|k1|enter|this|page|history|back|view|password|to'.split('|')))
//-->
</SCRIPT>


















/**
 *  Prompt for K1 individual pages (Version 1)
 *  ** This is old version -- this matches url to the entire url which is prone
 *  to error in different browsers(such as safari) and results in password keep
 *  prompting 
 * 	Asks for password iff the last page does not contain k1.html
 * 	This prevents direct access to student pages from using direct link
 */
<SCRIPT language = "JavaScript" >
<!--hide

var z = document.referrer;
if (z != 'http://msverinna.weebly.com/k1.html') {

	var a;

	var b = "tulip";

	a = prompt('Please enter password to view this page', ' ');

	if (a != b) 
		history.back();
}

//-->
</SCRIPT>



/**
 * 	Prompt for K1 individual pages (Version 2)
 * 	** This is a better version since it only checks the old url for keywords
 * 	Asks for password iff the last page does not contain k1.html
 * 	This prevents direct access to student pages from using direct link
 */
<SCRIPT language = "JavaScript" >
<!--hide

var z = document.referrer;
if (z.indexOf('k1') == -1) {

	var a;

	var b = "tulip";

	a = prompt('Please enter password to view this page', ' ');

	if (a != b) 
		history.back();
}

//-->
</SCRIPT>



/**
 * Obfuscated Version of single pages for pre K
 * only prompts when not from group page link
 */
<SCRIPT language = "JavaScript" >
<!--hide
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('0 2=8.9;1(2!=\'7://d.6.3/4-k.5\'){0 a;0 b="c";a=e(\'m o n l f g h\',\' \');1(a!=b)i.j()}',25,25,'var|if|z|com|pre|html|weebly|http|document|referrer|||tulip|msverinna|prompt|view|this|page|history|back||to|Please|password|enter'.split('|')))
//-->
</SCRIPT>



/**
 * Obfuscated Version of single pages for k1
 * only prompts when not from group page link
 */
<SCRIPT language = "JavaScript" >
<!--hide
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('0 2=8.9;1(2!=\'7://d.6.3/4.5\'){0 a;0 b="c";a=i(\'e m n l j f g\',\' \');1(a!=b)h.k()}',24,24,'var|if|z|com|k1|html|weebly|http|document|referrer|||tulip|msverinna|Please|this|page|history|prompt|view|back|to|enter|password'.split('|')))
//-->
</SCRIPT>



/**
 * Obfuscated Version of group pages
 * always prompt
 */
<SCRIPT language = "JavaScript" >
<!--hide
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('0 a;0 b="5";a=4(\'3 1 2 6 7 e d\',\' \');c(a!=b)8.9();',15,15,'var|enter|password|Please|prompt|tulip|to|view|history|back|||if|page|this'.split('|')))
//-->
</SCRIPT>
