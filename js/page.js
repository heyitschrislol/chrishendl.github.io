let http = require("http");
let fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    return res.end();
}).listen(5000);
let posts;
fs.readFile("posts.json", (err, data) => {
    if (err) throw err;
    posts = JSON.parse(data);
    for (let j = 0; j < posts.length; j++) {
        createPage(j);
    }
});
function createPage(j) {
    var html;
    var header = "<meta charset=\"utf-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><title>Chris Hendl</title><link rel=\"icon\" href=\"favicon.ico\"><link href=\"css/t-styles.css\" rel=\"stylesheet\" /><link href=\"css/fontfaces.css\" rel=\"stylesheet\" /><script src=\"js/ch_updates.js\"></script><script src=\"js/ch_gallery.js\"></script><script src=\"js/posts.json\"></script>";
    var body = "<section class=\"post-section post-section-sm\" id=\"section-post\"><div class=\"bline1\"></div>";
    let articlehead = posts[j].posthead[0];
    for (let z = 1; z < posts[j].posthead.length; z++) {
        articlehead += posts[j].posthead[z];
    }
    let articletext = posts[j].content[0];
    for (let x = 1; x < posts[j].content.length; x++) {
        articletext += posts[j].content[x];
    }
    articletext += "</div></article><div class=\"bline1\"></div></section>";
    // document.getElementById("poop").innerHTML = articletext;

    html = "<!DOCTYPE html>" +
        "<html><head>" + header + "</head><body>" + body + articlehead + articletext + "</body></html>";

    fs.writeFile("../" + posts[j].posttags.postname + ".html", html, function (err) {
        if (err) throw err;
        console.log("Saved!");
    });
}