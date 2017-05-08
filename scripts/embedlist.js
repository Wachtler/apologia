"use strict";

function addEmbedList(){
    let embedlist = "<h3>Semester 1:<br/> \
Week: <a href='./weeklyembed0.html'>0</a> <a href='./weeklyembed1.html'>1</a> <a href='./weeklyembed2.html'>2</a> <a href='./weeklyembed3.html'>3</a> <a href='./weeklyembed4.html'>4</a> <a href='./weeklyembed5.html'>5</a> <a href='./weeklyembed6.html'>6</a> <a href='./weeklyembed7.html'>7</a> <a href='./weeklyembed8.html'>8</a> <a href='./weeklyembed9.html'>9</a> <a href='./weeklyembed10.html'>10</a> <a href='./weeklyembed11.html'>11</a> <a href='./weeklyembed12.html'>12</a> <a href='./weeklyembed13.html'>13</a> <a href='./weeklyembed14.html'>14</a> <a href='./weeklyembed15.html'>15</a> <a href='./weeklyembed16.html'>16</a></h3>\
<h3>Semester 2: <br/> \
Week: <a href='./weeklyembed17.html'>17</a> <a href='./weeklyembed18.html'>18</a> <a href='./weeklyembed19.html'>19</a> <a href='./weeklyembed20.html'>20</a> <a href='./weeklyembed21.html'>21</a> <a href='./weeklyembed22.html'>22</a> <a href='./weeklyembed23.html'>23</a> <a href='./weeklyembed24.html'>24</a> <a href='./weeklyembed25.html'>25</a> <a href='./weeklyembed26.html'>26</a> <a href='./weeklyembed27.html'>27</a> <a href='./weeklyembed28.html'>28</a> <a href='./weeklyembed29.html'>29</a> <a href='./weeklyembed30.html'>30</a> <a href='./weeklyembed31.html'>31</a> <a href='./weeklyembed32.html'>32</a> </h3>";
	
    let currentHTML = document.getElementsByClassName('container')[0].innerHTML;
    document.getElementsByClassName('container')[0].innerHTML = currentHTML + embedlist;
	
};

window.addEventListener('load',addEmbedList);
