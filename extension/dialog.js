// document.forms[0].onsubmit = function(e) {
//     e.preventDefault(); // Prevent submission
//     var password = document.getElementById("pass").value;
//     chrome.runtime.getBackgroundPage(function(bgWindow) {
//         bgWindow.setPassword(password);
//         window.close();     // Close dialog
//     });
// };

var facts =
{

	"1": "In October 25th, of 1961 there was a vote against integration of the UT athletics and Moore-Hill Hall immigration of all University dormitory facilities",
	"2": "The Malcom X Lounge received its name in 1992. This was a 10 year long process",
	"3": "In the fall of 1993 the University didnt allow minority students to practice \"stepping\" (a dancing art form) in University buildings past 10pm, even though they were previously allowed",
	"4": "The Phi Gamma Delta house had a \"no blacks allowed\" sign in their yard in 1990",
	"5": "In May of 1985, Randy Bowman, the president of the Black Student Alliance, was attacked and beaten by ttwo white men with a  pipe and a bottle.",
	"6": "On June 29th, 1985 The University Advisory Committee refused to recommend a black candidate for the Presidential selection pool",
	"7": "On February 20th of 1986 Bowman is attacked by two white men wearing Ronald Regan masks. He is held out of an eight story window in Jester dormitory",
	"8": "On December 12th of 1988: Phi Gamma Delta, also known as the \"Figis\" are criticized for the use of their Fijji island Man a Black caricature used nationally by the fraternity",
	"9": "In January of 1990: The University of Texas President, William Cunningham announces support to erect a statue of Martin Luther King Jr. after three years of silence",
	"10": "On April 3rd, 1990: Torri Luckett is elected the first African-American Student Association President. She is also the first proclaimed lesbian.",
	"12": "On April 5th: A racist display of two black track runners trailing two white runners is painted in the window of Yarings Department Store on the Drag. The display, which was sponsored by the Spooks, sparked concerns in the Black community",
	"13": "On April 6th of 1990 Racial slurs are found on the car belonging to Delta Tua Delta during the Texas Round-up parade",
	"14": "On April 7th of 1990: Phi Gamma Delta, also known as Fiji, passed out TR shirts with a Sambo caricature on the body of Michael Jordan at their basketball tournament for Texas Round up",
	"15": "On April 9th of 1990 Black Student Alliance BSA summits PRIDE (Proposed Reforms to Institute Diversity in Education). Meets with President Cunningham about racial incidents that occurred during Texas Round up festivities.",
	"16": "On April 12th of 1990 Marcus Brown, president of BSA leads an anti-racism rally on the West Mall. Afterwards , the group marched to the Fiji fraternity house to protest the racist t-shirts they passed out earlier that week.",
	"17": "April 13th of 1990: president Cunningham, who asked three Black student athletes to stand behind him, attempted to deliver a speech on the South Mall. He is untimely shouted down by protesters.",
	"18": "On April 23rd of 1990. Cunningham released an apology to the Austin American Statements but not to the student athletes about the racist activities that happened that year on campus",
	"19": "On May 16th of 1946: Harmon Marion Sweatt (1912-1982) files a lawsuit against T.S. painter, the UT president on the basis that the University of Texas School of Law violated his rights guaranteed to hum under the equal protect clause of the 14th Amendment.",
	"20": "On March 10th of 1947, the Texas Southern University was established in order to keep African Americans from attending the University of Texas School of Law",
	"21": "On June 5th of 1950, in the landmark court case Sweatt v. Painter, the Supreme court ruled that the legal education institution, Texas Southern University for Blacks was not equal in quality of that of The University of Texas School of Law.",
	"22": "In the fall of 1956 the first Black undergraduate was admitted to the University of Texas",
	"23": "In the Spring of 1962 Gwen Jordan becomes the first Black student to be elected to serve in the Student Government",
	"24": "On June 1st of 1964 Dr. Evin Perry becomes the first African American assistant professor hired by the University in the department of Engineering",
	"25": "In the Fall of 1984, The first African American studies course entitled \"The negro in American Culture\" was offered under American Studies",
	"26": "In the fall of 1970: the ethnic studies program was created",
	"27": "In the Fall of 1970 Juluiis Whitter is the first Black student to be given a scholarship to play football for the University of Texas",
	"28": "In the Spring of 1970 Ernie Haywood became the first African American Vice President in Student Government",
	"29": "In the Fall of 1980 the Texas Union closes the African American Culture room but soon reopens it due to student protests",
	"30": "In the fall of 1981: Kappa Alpha, a historically white fraternity, holds a \"slave auction\" on campus",
	"31": "On October 22nd of 1998 Students lead a Tower sit in, demanding that President Faulkner reinstate affirmative action policies not specifically prohibited by the Hopwood decision",
	"32": "On October 29th of 1998 The University of Texas President Larry Faulkner publishes a public statement in the Daily Texan regarding the student protests on October 22nd",
	"33": "In September of 1999: Racial epithets found on posters in the Malcom X lounge",
	"34": "On September 24th of 1999 the Dr Martin Luther King Jr Statue is unveiled on the East Mall",
	"35": "On march 3rd of 2000 Daron Roberts is elected as the 4th African American Student Government President",
	"36": "In April of 2000 Racist flyers are posted on campus by the National Alliance, a Neo Nazi group",
	"37": "In April of 2000 students deliver a letter with a list of demands regarding racist fliers posted on campus by the Nation Alliance, to the Office of the President",
	"38": "In Spring of 2001, students demand changes to the Center for African and African American Studies",
	"39": "In Spring of 2001 Dr Edmund T Gordon and Dr Joni Jones are appointed as director and associate Director of the Center for African and African American studies",
	"40": "In April of 2001 Black and Hispanic students are successful in stopping the Dean of Students search due to concerns of the lack of diversity in the finalist pool",
	"41": "In the Spring of 2001 the new dean oif students. Dr. Theresa Graham Brett, takes office",
	"42": "In October 31st, of 2002 the phi Gamma Delta (Fijis) host their annual Halloween party, where at least one guest attended wearing Black face",
	"43": "In January 18th of 2003: Kevin Curry is racially profiled by the University of Texas Policed Department in the Texas Union",
	"44": "On January 20th of 2003 the MLK statue is egged",
	"45": "In January 21st of 2003 the Students march to the tower and demand that President Faulkner take actions to prevent future vandalism of the statue, in addition students sponsor a 24 hour rally to protest these acts.",
	"46": "On April 6th of 1995 Blackfest 1995 takes place to celebrate Black Culture",
	"47": "In March of 1995 Student referendum passes in Student Government Association election, which called for $1 per student per semester for four years (MLK statue)",
	"48": "On June 6th a bill to allow a student fee to pay for the MLK statue passes in the Texas Legislature",
	"49": "On September 2nd of 1995 the African American Culture Committee brings Bobby Seale and Eldridge Cleaver to campus",
	"50": "On September 31st of 1995 Black men of Austin march to the capital in honor of the million man march in Washington DC",
	"51": "On December 1st of 1995 the Malcom X lounge opened",
	"52": "On December 7th of 1995 the opening ceremony for the Malcom X lounge, \"Keeping our Eyes on the Prize\" takes place",
	"53": "On April 1st of 1996, students rally against the Hopwood decision",
	"54": "On July 1st of 1996 affirmative action is ended in higher education in Texas, Mississippi, and Louisiana",
	"55": "On November 1st of 1996, the African American culture committee brings Angela Davis to the University",
	"56": "On April 1st of 1997 Marlen Whitley is elected the 3rd African American Student Government President",
	"57": "In August of 1997 4 out of 487 African American students are accepted to the University of Texas Law School",
	"58": "In September of 1997 UT Law Professor Lino Graglia, makes racist comments about Blacks and Hispanics, which sparks protests and calling for his firing",
	"59": "On September 9th of 1997, Reverend Jesse Jackson Junior comes to the University to protest the statements made by Lino Graglia",
	"60": "On September 9th of 1997 Students sponsored a 6 hour sit in at the Law School following reverend Jesse Jacksons speech",
	"61": "In 1998 on June 1st the New Multicultural Information Center Opens",
	"62": "In Fall of 1998 the Texas Attorney General Dan Morales applies a broad interpretation of the Hopwood ruling to all public universities and colleges in Texas"

}

var random = Math.floor((Math.random() * 62) + 1);
var questionDiv = document.getElementById('question');
var factSpan = questionDiv.querySelector('.factsText');
factSpan.innerHTML = facts[random];
console.log(facts[random]);