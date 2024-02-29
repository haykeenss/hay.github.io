
var linkedin = "https://linkedin.com/in/haykeenss";
var github = "https://github.com/haykeenss";
var email = 'haytech46@gmail.com';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `If you are here haykeens can trust you with his info.`,
  `This site give you full access to haykeens file if you know the commands.`,
  "<br>",
];

scripts = [
  "<br>",
  "Happy Hacking",
  `<table>
  <tr><td>Xss</td><td>cross site script</td></tr>
  <tr><td>Sql</td><td>sql</td></tr>
  </table>`,
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin/R3X</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">github/R3X</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "Work in progress... most projects are still offline, on GitHub or confidential.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate R3X-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Why are you here</td></tr>
  <tr><td><span class="command">scripts</span></td><td>what you need</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,

  "<br>",
];

/*banner = [
  "<br>",
    
  "<br>",
];
*/

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome to my personal website.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and hit 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd", "sudo", "gui",
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

