// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D

// Extension
// If you are an experienced Javascript programmer, try shortening your code as much as possible and optimise it to minimise run time. Experienced programmers should be able to complete this exercise in one line of code.

function htmlspecialchars(formData) {
    let arr = [];
      for (let i = 0; i < formData.length; i++){
        if (formData[i] == '<'){
          arr.push('&lt;');
          
        } else if(formData[i] == '>'){
          arr.push('&gt;');
          
        } else if(formData[i] == '"'){
          arr.push('&quot;');
          
        } else if(formData[i] == '&'){
          arr.push('&amp;');
          
        } else {
          arr.push(formData[i]);
        }
      }
    return arr.join('');
    }

// with chained replace()
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
  }

// using obj key/value pairs
function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}
// 
var htmlspecialchars=s=>s.replace(/[<>"&]/g,c=>`&${{'<':'lt','>':'gt','"':'quot','&':'amp'}[c]};`)
