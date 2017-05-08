"use strict";

function getWeekNumber(){
    let currentDate = new Date();
    let dates = [
        [ "2016", "8",  "13" ],
        [ "2016", "8",  "20" ],
        [ "2016", "8",  "27" ],
        [ "2016", "8",  "3"  ],
        [ "2016", "9",  "11" ],
        [ "2016", "9",  "18" ],
        [ "2016", "9",  "25" ],
        [ "2016", "10",  "1" ],
        [ "2016", "10", "8"  ],
        [ "2016", "10", "15" ],
        [ "2016", "10", "29" ],
        [ "2016", "11", "6"  ],
        [ "2016", "11", "13" ],
        [ "2017", "0",  "10"  ],
        [ "2017", "0",  "18" ],
        [ "2017", "0",  "24" ],
        [ "2017", "0",  "31" ],
        [ "2017", "1",  "7"  ],
        [ "2017", "1",  "14" ],
        [ "2017", "1",  "21" ],
        [ "2017", "1",  "28" ],
        [ "2017", "2",  "7"  ],
        [ "2017", "2",  "14" ],
        [ "2017", "2",  "28" ],
        [ "2017", "2",  "4"  ],
        [ "2017", "3",  "11" ],
        [ "2017", "3",  "18" ],
        [ "2017", "3",  "25" ],
        [ "2017", "4",  "2"  ],
        [ "2017", "4",  "9"  ],
        [ "2017", "4",  "16" ],
        [ "2017", "4",  "23" ],
        [ "2017", "4",  "30" ],

    ];
    for (var i = 0; i < dates.length; i++) {
        let item = dates[i];
        let year = item[0];
        let month = item[1];
        let day = item[2];
        if (currentDate < new Date(year, month, day)) return i;
    }

    // fail-case--zero
    return 0;
} // Shoutout to Conor O'Brien for helping with this a lot! (aka he wrote most of that getWeekNumber func)

window.addEventListener("load", function () {
    let sourceLocation = "./embed/weeklyembed";
    sourceLocation += getWeekNumber();
    sourceLocation += ".html";
    document.getElementById("embeddedlist").src = sourceLocation;
});