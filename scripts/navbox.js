"use strict";
var nav;
let chemnavbox = `
      <div class="navbox">
                <h3>Table of Contents</h3>
                <ul>
                    <li><a href="../">Back to the Home Page</a></li>
                    <li><a href="./">DDC Main Page</a></li>
                    <li><a href="./syllabus.html">Syllabus</a></li>
                    <li><a href="./calendar.html">Calendar</a></li>
                    <li><a href="./weekly.html">Weekly Assignments</a></li>
                    <li><a href="./honorcode.html">Honor Code</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="./chapter1.html" class="small">CHAPTER #1: Measuring Up</a>
                    </li>
                    <li>
                        <a href="./chapter2.html" class="small">CHAPTER #2: What's the Matter?</a>
                    </li>
                    <li>
                        <a href="./chapter3.html" class="small">CHAPTER #3: Making Sense of Atoms and Elements</a>
                    </li>
                    <li>
                        <a href="./chapter4.html" class="small">CHAPTER #4: The Modern View of Atoms and Their Chemistry</a>
                    </li>
                    <li>
                        <a href="./chapter5.html" class="small">CHAPTER #5: Covalent Compounds and Their Molecular Geometry</a>
                    </li>
                    <li>
                        <a href="./chapter6.html" class="small">CHAPTER #6: Physical and Chemical Change</a>
                    </li>
                    <li>
                        <a href="./chapter7.html" class="small">CHAPTER #7: Stoichiometry</a>
                    </li>
                    <li>
                        <a href="./chapter8.html" class="small">CHAPTER #8: Still More on Stoichiometry</a>
                    </li>
                    <li>
                        <a href="./chapter9.html" class="small">CHAPTER #9: Chemists Have Solutions</a>
                    </li>
                    <li>
                        <a href="./chapter10.html" class="small">CHAPTER #10: It’s a Gas! </a>
                    </li>
                    <li>
                        <a href="./chapter11.html" class="small">CHAPTER #11: Some Pretty Basic (and Acidic) Chemicals</a>
                    </li>
                    <li>
                        <a href="./chapter12.html" class="small">CHAPTER #12: Reduction and Oxidation</a>
                    </li>
                    <li>
                        <a href="./chapter13.html" class="small">CHAPTER #13: The Heat is On</a>
                    </li>
                    <li>
                        <a href="./chapter14.html" class="small">CHAPTER #14: Thermodynamics</a>
                    </li>
                    <li>
                        <a href="./chapter15.html" class="small">CHAPTER #15: Kinetics</a>
                    </li>
                     <li>
                        <a href="./chapter16.html" class="small">CHAPTER #16: Chemical Equilibrium</a>
                    </li>
                </ul>
            </div>`;
            
let physnavbox = `
      <div class="navbox">
                <h3>Table of Contents</h3>
                <ul>
                    <li><a href="../">Back to the Home Page</a></li>
                    <li><a href="./">APSci Main Page</a></li>
                    <li><a href="./syllabus.html">Syllabus</a></li>
                    <li><a href="./calendar.html">Calendar</a></li>
                    <li><a href="./weekly.html">Weekly Assignments</a></li>
                    <li><a href="./yourexperiment.html">Your Science Experiment</a></li>
                    <li><a href="./vocabreview.html">Vocabulary Review</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="./module1.html" class="small">MODULE #1: The Basics</a>
                    </li>
                    <li>
                        <a href="./module2.html" class="small">MODULE #2: Air</a>
                    </li>
                    <li>
                        <a href="./module3.html" class="small">MODULE #3: The Atmosphere</a>
                    </li>
                    <li>
                        <a href="./module4.html" class="small">MODULE #4: The Wonder of Water </a>
                    </li>
                    <li>
                        <a href="./module5.html" class="small">MODULE #5: The Hydrosphere</a>
                    </li>
                    <li>
                        <a href="./module6.html" class="small">MODULE #6: Earth and the Lithosphere</a>
                    </li>
                    <li>
                        <a href="./module7.html" class="small">MODULE #7: Factors That Affect Earth’s Weather </a>
                    </li>
                    <li>
                        <a href="./module8.html" class="small">MODULE #8: Weather and Its Prediction </a>
                    </li>
                    <li>
                        <a href="./module9.html" class="small">MODULE #9: An Introduction to the Physics of Motion</a>
                    </li>
                    <li>
                        <a href="./module10.html" class="small">MODULE #10: Newton’s Laws </a>
                    </li>
                    <li>
                        <a href="./module11.html" class="small">MODULE #11: The Forces in Creation - Part 1</a>
                    </li>
                    <li>
                        <a href="./module12.html" class="small">MODULE #12: The Forces in Creation - Part 2</a>
                    </li>
                    <li>
                        <a href="./module13.html" class="small">MODULE #13: The Forces in Creation - Part 3</a>
                    </li>
                    <li>
                        <a href="./module14.html" class="small">MODULE #14: Waves and Sound </a>
                    </li>
                    <li>
                        <a href="./module15.html" class="small">MODULE #15: Light </a>
                    </li>
                     <li>
                        <a href="./module16.html" class="small">MODULE #16: An Introduction to Astrophysics    </a>
                    </li>
                </ul>
            </div>`;
            
let navbox = `
      <div class="navbox">
                <h3>Table of Contents</h3>
                <ul>
                    <li><a href="./">Main Page</a></li>
                    <li><a href="./syllabus.html">Syllabus</a></li>
                    <li><a href="./calendar.html">Calendar</a></li>
                    <li><a href="./weekly.html">Weekly Assignments</a></li>
                    <li><a href="./yourexperiment.html">Your Science Experiment</a></li>
                    <li><a href="./honorcode.html">Honor Code</a></li>
                    <li><a href="./vocabreview.html">Vocabulary Review</a></li>
                    <li><a href="./citations.html">Cite Your Sources</a></li>
                    <li><a href="./physical-science/">Apologia Physical Science</a></li>
                    <li><a href="./chemistry/">Discovering Design with Chemistry</a></li>
                </ul>
            </div>`;

function check() {
	var a;
    if (location.href.includes("chemistry")) {
    	a = "limegreen";
    } else if (location.href.includes("physical")) {
    	a = "teal";
    } else {
    	a = "royalblue";
    }
    var elements = document.getElementsByClassName('title');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor=a;
    }
    
    if (location.href.includes("chemistry")) {
    	a = "lightgreen";
    } else if (location.href.includes("physical")) {
    	a = "mediumturquoise";
    } else {
    	a = "royalblue";
    }
    var elements = document.getElementsByClassName('.subtitle');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor=a;
    }
}

function addNavbox() {
    // Save current innerHTML
    let currentHTML = document.getElementsByClassName("container")[0].innerHTML;
    
    if (location.href.includes("chemistry")) {
    	nav = chemnavbox;
    } else if (location.href.includes("physical")) {
    	nav = physnavbox;
    } else {
    	nav = navbox;
    }
    // Prepend.
    document.getElementsByClassName("container")[0].innerHTML = nav + currentHTML;
};

function start(){
	check();
	addNavbox();
}

window.addEventListener("load", start);
