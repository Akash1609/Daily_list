module.exports.getdate=function(){
var today = new Date();
    var option = {
        weekday:"long",
        year : "numeric",
        month: 'long',
        day:'numeric'
    };

    var Day =today.toLocaleDateString("en-US", option);
    // switch(today.getDay())
    // {
    //     case 0:
    //         Day = "sunday";
    //         break;
    //     case 1:
    //         Day = "monday";
    //         break;
    //     case 2:
    //         Day = "Tuesday";
    //         break;
    //     case 3:
    //         Day = "Wednessday";
    //         break;
    //     case 4:
    //         Day = "Thursday";
    //         break;
    //     case 5:
    //         Day = "Friday";
    //         break;
    //     case 6:
    //         Day = "suterday";
    //         break;
            
    // }
    return Day;
}

exports.getday = function(){
    var today = new Date();
    var option={
        weekday:"long"
    }
    return today.toLocaleDateString("en-US", option);
}