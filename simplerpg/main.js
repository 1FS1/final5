var mapArray, ctx, currentImgMainX, currentImgMainY, stop;
var imgMountain, imgMain, imgEnemy, imgatk1, imgatk2;
stop = 1;
$(document).ready(function(){
    
    mapArray = [0,0,1,3
               ,1,0,0,0
               ,2,1,3,0
               ,0,0,0,0];
    ctx = $("#myCanvas")[0].getContext("2d");
    

    imgMain = new Image();
    imgatk1 = new Image();
    imgatk2 = new Image();
    imgMain.src = "simplerpg/images/sword0.png";
    imgatk1.src = "simplerpg/images/sword1.png";
    imgatk2.src = "simplerpg/images/sword2.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain, 0, 0, 400, 500, currentImgMainX,currentImgMainY, 200, 200);
    };
    
    imgMountain = new Image();
    imgMountain.src = "simplerpg/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "simplerpg/images/Enemy.png";
    imgMountain.onload= function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
            {
                if(mapArray[x] == 1)
                {
                    ctx.drawImage(imgMountain, 32,65,32,32,x%4*200,Math.floor(x/4)*200,200,200);
                }
                else if(mapArray[x] == 3)
                {
                    ctx.drawImage(imgEnemy,7,40,104,135,(x%4)*200,Math.floor(x/4)*200,200,200);
                }
            }
        };
    };
});

$(document).keydown(function(event){
   var targetImgMainX, targetImgMainY, targetBlock, cutImgePositionX;
    var act = 0;
    event.preventDefault();
    if(stop == 1)
    {
        switch(event.which){
            case 65:
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY;
                act = 1;
                stop = 0;
                break;
            case 37://left
                targetImgMainX = currentImgMainX - 200;
                targetImgMainY = currentImgMainY;
                act = 0;
                break;
            case 38://up
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY - 200;
                act = 0;
                break;
            case 39://right
                targetImgMainX = currentImgMainX + 200;
                targetImgMainY = currentImgMainY;
                act = 0;
                break;
            case 40://down
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY + 200;
                act = 0;
                break;
            default:
                return;
        }
    
    if(targetImgMainX<=600 && targetImgMainX>=0 && targetImgMainY<=600 && targetImgMainY>=0)
    {
        targetBlock = targetImgMainX / 200 + targetImgMainY / 200 * 4;
    }
    else
    {
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {        
    }
    else
    {
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    if(act == 0)
    {
        ctx.drawImage(imgMain,0,0,400,500,currentImgMainX,currentImgMainY,200,200);
    }
    else
    {
        ctx.drawImage(imgatk1, 0, 0, 400, 500, currentImgMainX,currentImgMainY, 200, 200);
        setTimeout(action1, 300);
    }
    
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("邊界");
            break;
            case 1:
                $("#talkBox").text("有山");
            break;
            case 2:
                $("#talkBox").text("抵達終點!");
            break;
            case 3:
                $("#talkBox").text("嗨~");
            break;
        }
    }
});

function action1()
{
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    ctx.drawImage(imgatk2, 0, 0, 400, 500, currentImgMainX,currentImgMainY, 200, 200);
    setTimeout(action2, 300);
}
function action2()
{
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    ctx.drawImage(imgMain,0,0,400,500,currentImgMainX,currentImgMainY,200,200);
    stop = 1;
}