
let d2 = document.querySelector("#actua");
let d3 = document.querySelector("#form")
let d4 = document.querySelector("#cal")
let d5 = document.querySelector("#app")
//On utilise la méthode addEventListener pour gérer des évènements


d2.addEventListener('mouseover', function(){this.style.backgroundColor ='silver'})
d2.addEventListener('mouseout', function(){this.style.backgroundColor ='white'})
d3.addEventListener('mouseover', function(){this.style.backgroundColor ='silver'})
d3.addEventListener('mouseout', function(){this.style.backgroundColor ='white'})
d4.addEventListener('mouseover', function(){this.style.backgroundColor ='silver'})
d4.addEventListener('mouseout', function(){this.style.backgroundColor ='white'})
d5.addEventListener('mouseover', function(){this.style.backgroundColor ='silver'})
d5.addEventListener('mouseout', function(){this.style.backgroundColor ='white'})



$(document).ready(function(){
        let pspan = $("p").has("span").css("color", "red");
    });

    $(document).ready(function(){
        $("span").filter(".souligne").css("color", "green");
    });

    $(document).ready(function(){
        $("p").click(function(){
            $(this).text("Paragraphe lu");
        });
    
        /*Code équivalent utilisant on()
        $("p").on("click", function(){
            $(this).text("Paragraphe cliqué");
        })
        */
    });
    
  