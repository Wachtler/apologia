function getWeekNumber(){
    var currentDate = new Date();
    var dates = [
        [ "2016", "8",  "12" ],
        [ "2016", "8",  "19" ],
        [ "2016", "8",  "26" ],
        [ "2016", "9",  "3"  ],
        [ "2016", "9",  "10" ],
        [ "2016", "9",  "17" ],
        [ "2016", "9",  "24" ],
        [ "2016", "9",  "31" ],
        [ "2016", "10", "7"  ],
        [ "2016", "10", "14" ],
        [ "2016", "10", "28" ],
        [ "2016", "11", "5"  ],
        [ "2016", "11", "12" ],
        [ "2017", "0",  "9"  ],
        [ "2017", "0",  "17" ],
        [ "2017", "0",  "23" ],
        [ "2017", "0",  "30" ],
        [ "2017", "1",  "6"  ],
        [ "2017", "1",  "13" ],
        [ "2017", "1",  "20" ],
        [ "2017", "1",  "27" ],
        [ "2017", "2",  "6"  ],
        [ "2017", "2",  "13" ],
        [ "2017", "2",  "20" ],
        [ "2017", "2",  "27" ],
        [ "2017", "3",  "3" ],
        [ "2017", "3",  "10" ],
        [ "2017", "3",  "17" ],

    ];
    for(var i = 0; i < dates.length; i++){
        var item  = dates[i];
        var year  = item[0];
        var month = item[1];
        var day   = item[2];
        if(currentDate < new Date(year, month, day))
            return i;
    }
    
    // fail-case--zero
    return 0;
} // Shoutout to Conor O'Brien for helping with this a lot! (aka he wrote most of that getWeekNumber func)

window.addEventListener("load", function(){
    var sourceLocation = "./embed/weeklyembed";
    sourceLocation += getWeekNumber();
    sourceLocation += ".html"
    document.getElementById("embeddedlist").src = sourceLocation;
    console.log(SourceLocation);
});