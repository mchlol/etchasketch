WORK IN PROGRESS<br>

The Odin Project Foundations
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project
# etchasketch
<br>
The task is to build an etchasketch-like drawing grid, where the cells change when a user hovers over with their mouse.<br>
I'm calling my project "Pixel Sketchpad" because I never had an etchasketch as a kid and I don't know what that is. I had MS Paint and drawing scribbles on deposit slips at the bank.<br>
<a href="https://mchlol.github.io/etchasketch">Current barebones working version is here.</a>
<br>
I've learned:<br>
<ul>
<li>More about event listeners - this project uses a click event and mouseover.
    <li>When the darken pen is clicked, a hover counter is applied to all of the cells. When another pen is clicked, the counter is still running. the event listeners are all firing - black is added, color is added, the counter is increased. this is why the darken function loops when it reached 10, and doesn't work at all once another pen colour has been clicked. Still working on this.</li>
</li>
<li>Adding multiple css styles to an element at once - I did this using cssText.</li>
<li>To use git fetch after merging a branch into main!
    <li>Merge the branch</li>
    <li>Run git fetch</li>
    <li>Run git merge</li>
</li>
</ul>