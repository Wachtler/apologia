function getWeekNumber(){
    var currentDate = new Date();
    var dates = [
        [ "2016", "8",  "9" ],
        [ "2016", "8",  "16" ],
        [ "2016", "8",  "23" ],
        [ "2016", "8",  "30"  ],
        [ "2016", "9",  "7" ],
        [ "2016", "9",  "14" ],
        [ "2016", "9",  "21" ],
        [ "2016", "9",  "28" ],
        [ "2016", "10", "4"  ],
        [ "2016", "10", "11" ],
        [ "2016", "10", "25" ],
        [ "2016", "11", "2"  ],
        [ "2016", "11", "9" ],
        [ "2017", "0",  "6"  ],
        [ "2017", "0",  "14" ],
        [ "2017", "0",  "20" ],
        [ "2017", "0",  "27" ],
        [ "2017", "1",  "3"  ],
        [ "2017", "1",  "10" ],
        [ "2017", "1",  "17" ],
        [ "2017", "1",  "24" ],
        [ "2017", "2",  "3"  ],
        [ "2017", "2",  "10" ],
        [ "2017", "2",  "17" ],
        [ "2017", "2",  "24" ],
        [ "2017", "2",  "31" ],
        [ "2017", "3",  "7" ],
        [ "2017", "3",  "14" ],
        [ "2017", "3",  "28" ],
        [ "2017", "4",  "5" ],
        [ "2017", "4",  "12" ],
        [ "2017", "4",  "19" ],
        [ "2017", "4",  "26" ],

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