<script>
        
        /*var artDiv = document.querySelector("div.article");
        var newDiv = artDiv.cloneNode(true); //Clone elements from artDiv to newDiv
            document.body.appendChild(newDiv);
            artDiv.style.color = "red";
        
        var oldP = document.querySelectorAll("div.article p")[1];
        var newP = document.createElement("p");
            newP.textContent = "I'm new paragraph!!"
            artDiv.replaceChild(newP,oldP);*/
            
        // newDiv.style.textTransform = "uppercase";

        /*var removeNew = document.querySelectorAll("div.article p")[0];
        artDiv.removeChild(removeNew);*/
        
        /*var getArticle = document.querySelector("div.article");
        //Create Element
        var createEl = document.createElement("h3");
        //Add some text in him
        var txt = document.createTextNode("Hello");
        //Add txt like sibling el
        createEl.appendChild(txt);
        //Add el in tag <div>
        getArticle.appendChild(createEl);*/

        /*var createParagraph = document.createElement("p");
        createParagraph.textContent = "DANGER";
        getArticle.appendChild(createParagraph);

        var _createChild = document.createElement("span");
            _createChild.textContent = "Hello I'm block named <span>"
            _createChild.style.color = "green";
        var firstElem = getArticle.firstChild.nextSibling;
            getArticle.insertBefore(_createChild,firstElem);*/

        /*function addElement(tag,text,font,where) {
            var _elementP = document.createElement(tag);
                _elementP.textContent = text;
                _elementP.style.fontFamily = font; 
            getArticle.appendChild(_elementP);

            if(where == "Before") {
                getArticle.insertBefore(_elementP,firstElem);
            } else if("After") {
                firstElem = getArticle.firstChild.previousSibling;
                getArticle.insertBefore(_elementP,firstElem);
            }
        }
        addElement("p","Hello World","monospace","Before");*/
        
        /*function styleP(font,size,color) {
            createParagraph.style.fontFamily = font;
            createParagraph.style.fontSize = size;
            createParagraph.style.color = color;

            if(color == "red") {
                var createDangerText = document.createElement('p');
                createDangerText.textContent = "You choosed red color, you are dangerous person";
                getArticle.appendChild(createDangerText);
                createDangerText.style.fontFamily = "monospace";
            } else {
                console.log(color);
            }
        }
        styleP("monospace","18px","red");*/

         var _href = document.querySelector("a.link");
        _href.setAttribute("href", "https://jquery.com/");
        console.log(_href.getAttribute("href"));

        var setClass = document.querySelector("div");
        setClass.className = "block__one";
    </script>
