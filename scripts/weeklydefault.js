const getWeekNumber = () => {
    let currentDate = new Date();
    let dates = [
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
        [ "2017", "0",  "23" ]
    ];
    for(let i = 0; i < dates.length; i++){
        let [year, month, day] = dates[i];
        if(currentDate < new Date(year, month, day))
            return i;
    }
    
    // fail-case--zero
    return 0;
} // Shoutout to Conor O'Brien for helping with this a lot! (aka he wrote most of that getWeekNumber func)

window.addEventListener("load", function(){
    let sourceLocation = "./embed/weeklyembed";
    sourceLocation += getWeekNumber();
    sourceLocation += ".html"
    document.getElementById("embeddedlist").src = sourceLocation;
});