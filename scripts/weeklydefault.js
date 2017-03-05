function getWeekNumber(){
    var currentDate = new Date();
    var dates = [
        [ "2016", "8",  "10" ],
        [ "2016", "8",  "17" ],
        [ "2016", "8",  "24" ],
        [ "2016", "8",  "31" ],
        [ "2016", "9",  "8" ],
        [ "2016", "9",  "15" ],
        [ "2016", "9",  "22" ],
        [ "2016", "9",  "29" ],
        [ "2016", "10", "5"  ],
        [ "2016", "10", "12" ],
        [ "2016", "10", "26" ],
        [ "2016", "11", "3"  ],
        [ "2016", "11", "10" ],
        [ "2017", "0",  "7"  ],
        [ "2017", "0",  "15" ],
        [ "2017", "0",  "21" ],
        [ "2017", "0",  "28" ],
        [ "2017", "1",  "4"  ],
        [ "2017", "1",  "11" ],
        [ "2017", "1",  "18" ],
        [ "2017", "1",  "25" ],
        [ "2017", "2",  "4"  ],
        [ "2017", "2",  "11" ],
        [ "2017", "2",  "18" ],
        [ "2017", "2",  "25" ],
        [ "2017", "2",  "1" ],
        [ "2017", "3",  "8" ],
        [ "2017", "3",  "15" ],
        [ "2017", "3",  "29" ],
        [ "2017", "4",  "6" ],
        [ "2017", "4",  "13" ],
        [ "2017", "4",  "20" ],
        [ "2017", "4",  "27" ],

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