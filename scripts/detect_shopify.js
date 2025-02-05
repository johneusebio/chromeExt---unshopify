// this extension will detect if the current webpage uses shopify
const shopifyid_ls = document.querySelectorAll("[id*='shopify']");
const shopifysrc_ls = document.querySelectorAll("[src*='shopify']");
// const shopifyhref_ls = document.querySelectorAll("[href*='shopify']");

const n_shopify = shopifyid_ls.length + shopifysrc_ls.length; // + shopifyhref_ls.length;

console.log(n_shopify); //sanity check

if (n_shopify > 0) {
    const text1 = "This site uses Shopify.";
    const text2 = "Please consider using an alternative.";
    const text3 = "We found <b>" + n_shopify + "</b> Shopify elements on this page.";

    // the box
    const unshop_box = document.createElement("div");
    unshop_box.setAttribute("class", "unshop_box");
    unshop_box.style.width  = "400px";
    unshop_box.style.height = "220px";
    unshop_box.style.margin = "20px";
    unshop_box.style.zIndex = "9999";
    unshop_box.style.margin = "20px";
    unshop_box.style.position = "fixed";
    unshop_box.style.justifySelf = "right"
    unshop_box.style.background = "rgb(223, 223, 223)";
    unshop_box.style.borderRadius = "10px";
    unshop_box.style.filter = "drop-shadow(-2px 8px 11px rgb(0, 0, 0, .5))";
    unshop_box.style.borderTopColor = "#ededed";
    unshop_box.style.borderTopStyle = "groove";
    unshop_box.style.borderBottomColor = "#e9e9e9"
    unshop_box.style.borderBottomStyle = "groove";
    unshop_box.style.display = "flow";
    unshop_box.style.top = "30px"
    unshop_box.style.right = "30px"

    // what's in the box
    const unshop_image = document.createElement("img");
    unshop_image.setAttribute("class", "unshop_image");
    unshop_image.src = chrome.runtime.getURL("images/stopsign.png");
    unshop_image.style.margin = "10px";
    unshop_image.style.marginBottom = "-10px";
    unshop_image.style.width = "auto";
    unshop_image.style.height = "100px";
    unshop_image.style.marginLeft = "auto";
    unshop_image.style.marginRight = "auto";
    unshop_image.style.display = "block";

    const unshop_text1 = document.createElement("p");
    unshop_text1.setAttribute("class", "unshop_text1");
    unshop_text1.innerHTML = text1;
    unshop_text1.style.margin = "10px";
    unshop_text1.style.textAlign = "center";
    unshop_text1.style.marginTop = "30px";
    unshop_text1.style.marginBottom = "0px";
    unshop_text1.style.fontWeight = "600";
    
    const unshop_text2 = document.createElement("p");
    unshop_text2.setAttribute("class", "unshop_text2");
    unshop_text2.innerHTML = text2;
    unshop_text2.style.margin = "0px";
    unshop_text2.style.textAlign = "center";
    unshop_text1.style.fontWeight = "600";

    const unshop_text3 = document.createElement("p");
    unshop_text3.setAttribute("class", "unshop_text3");
    unshop_text3.innerHTML = text3;
    unshop_text3.style.textAlign = "center";
    unshop_text3.style.fontSize = "xx-small";
    unshop_text3.style.marginTop = "8px";
    unshop_text3.style.marginBottom = "0px";

    const unshop_close = document.createElement("button");
    unshop_close.innerText = "⨉";
    unshop_close.style.background = "rgb(255, 255, 255)";
    unshop_close.style.width = "40px";
    unshop_close.style.height = "40px";
    unshop_close.style.borderRadius = "50px";
    unshop_close.style.fontSize = "x-large"
    unshop_close.style.margin = "-12px";
    unshop_close.style.float = "right";
    unshop_close.style.outlineColor = "black";
    unshop_close.style.outlineStyle = "solid";
    unshop_close.style.outlineWidth = "thin";
    unshop_close.style.color = "black";

    // close button functionality
    unshop_close.onclick = function() {
        unshop_box.style.display = "none";
    }

    // joining them together
    unshop_box.appendChild(unshop_close);
    unshop_box.appendChild(unshop_image);
    unshop_box.appendChild(unshop_text1);
    unshop_box.appendChild(unshop_text2);
    unshop_box.appendChild(unshop_text3);


    // insert into document
    document.body.appendChild(unshop_box);

}