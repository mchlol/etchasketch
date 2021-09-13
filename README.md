WORK IN PROGRESS<br>

The Odin Project Foundations
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project
# etchasketch
<br>
The task is to build an etchasketch-like drawing grid, where the cells change when a user hovers over with their mouse.<br>
I'm calling my project "Pixel Sketchpad" because I never had an etchasketch as a kid and I don't know what that is. I had MS Paint and drawing scribbles on deposit slips at the bank.<br>
<a href="https://mchlol.github.io/etchasketch">Current barebones working version is here.</a>
<br>
<hr>
<strong>Update 13 Sep 2021</strong><br>
I've been taking the <a href="https://beginnerjavascript.com/" target="_blank">Beginner JavaScript</a> course by Wes Bos (excellent), and it gave me an idea. I went back into this project and removed some of those duplicate event listeners (mentioned below), and created an "activePen" variable which sets the background colour on hover. This tidied things up quite a bit. I also worked out a clearAll function, which sets all the current cell backgrounds to white using a forEach method. (Still no luck with the darkening function yet).<br>
<hr>
<br>
I've learned:<br>
<ul>
<li>More about event listeners - this project uses a click event and mouseover.
    <li>An issue: When the darken pen is clicked, a hover counter is applied to all of the cells. When another pen is clicked, the counter is still running. Also, the event listeners are all firing - black is added, color is added, the counter is increased. This is why the darken function loops when it reaches 10, and doesn't work at all once another pen colour has been clicked. Still working on this.</li>
    <li>I discovered this by using Chrome DevTools debugging combined with a lot of console logging.</li>
    <li>I decided to finish the project <em>for now</em> without the darken function. I'll try to come back to it in the future when I have more knowledge and experience.</li>
</li>
<li>Adding multiple css styles to an element at once - I did this using cssText. I used this to add a background colour, opacity, and filter brightness.</li>
<li>I used the worlds longest if statement with duplicate code to run these functions. Bad code practice, but again I hope to come back to it in future when I know better.<li>
<li>To use git fetch after merging a branch into main!
    <li>Merge the branch</li>
    <li>Run git fetch</li>
    <li>Run git merge</li>
    This is a problem I had run into before when all my code reverted to some earlier version and I didn't know how to get it back. It just needed to be <em>merged</em>!
</li>
</ul>