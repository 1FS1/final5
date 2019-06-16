/*window.onload=function()
{
};
*/
$(document).ready(function(){
   $("input").click(function()
   {
       var num = Math.random() * 3;
       var randomchildnumber = Math.floor(Math.random() * 3);
       
       $("h1").text($("choice li").eq(randomchildnumber).text());
       if(randomchildnumber == 0)
       {
            $("img").attr({
                src:"randomselector/sword0.png",
                title:"jQuery",
                alt:"Saber"
            });
           document.getElementById('result').innerHTML = ('劍士');
        }
       else if(randomchildnumber == 1)
       {
            $("img").attr({
                src:"randomselector/cowboy0.png",
                title:"jQuery",
                alt:"Archer"
            });
           document.getElementById('result').innerHTML = ('射手');
       }
       else if(randomchildnumber == 2)
       {
            $("img").attr({
                src:"randomselector/witch.png",
                title:"jQuery",
                alt:"Castle"
            });
           document.getElementById('result').innerHTML = ('法師');
       }
   });
});