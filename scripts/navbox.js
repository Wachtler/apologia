function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

navbox = `
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
						<a href="./module16.html" class="small">MODULE #16: An Introduction to Astrophysics	</a>
					</li>
				</ul>
			</div>`;
	
function addNavbox(){
	// Save current innerHTML
	currentHTML = document.getElementsByClassName("container")[0].innerHTML;
	// Prepend.
	document.getElementsByClassName("container")[0].innerHTML = navbox + currentHTML;
};

addLoadEvent(addNavbox);
