"use strict";

function getWeekNumber(){
    const currentDate = new Date();
    const dates = [
        [ "2017", "8",  "11" ],
        [ "2017", "8",  "18" ],
        [ "2017", "8",  "25" ],
        [ "2017", "8",  "2"  ],
        [ "2017", "9",  "9" ],
        [ "2017", "9",  "16" ],
        [ "2017", "9",  "23" ],
        [ "2017", "9",  "30" ],
        [ "2017", "10", "6"  ],
        [ "2017", "10", "13" ],
        [ "2017", "10", "27" ],
        [ "2017", "11", "4"  ],
        [ "2017", "11", "11" ],
        [ "2018", "0",  "8"  ],
        [ "2018", "0",  "16" ],
        [ "2018", "0",  "22" ],
        [ "2018", "0",  "29" ],
        [ "2018", "1",  "5"  ],
        [ "2018", "1",  "12" ],
        [ "2018", "1",  "19" ],
        [ "2018", "1",  "26" ],
        [ "2018", "2",  "5"  ],
        [ "2018", "2",  "12" ],
        [ "2018", "2",  "26" ],
        [ "2018", "3",  "9"  ],
        [ "2018", "3",  "16" ],
        [ "2018", "3",  "23" ],
        [ "2018", "3",  "30" ],
        [ "2018", "4",  "7"  ],
        [ "2018", "4",  "14" ],
        [ "2018", "4",  "21" ],
        [ "2018", "5",  "4"  ]
    ];
    for (var i = 0; i < dates.length; i++) {
        const item = dates[i];
        const year = item[0];
        const month = item[1];
        const day = item[2];
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