$(document).ready(function(){
    
    $("#courseTable").append("<tr><th>職業</th><th>主題</th>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x = 0; x < topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        if(x == 0)
        {
           $("#courseTable").append("<td>" + "Saber" +"</td>");
        }
        else if(x == 1)
        {
           $("#courseTable").append("<td>" + "Archer" +"</td>");
        }
        else
        {
           $("#courseTable").append("<td>" + "Castle" +"</td>");
        }
       /*$("#courseTable").append("<td>"+
        (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString()+"</td>");*/
        $("#courseTable").append("<td>" + topic[x] + "</td>");
        $("#courseTable").append("</tr>");
    }
});