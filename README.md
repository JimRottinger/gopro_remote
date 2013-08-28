Remote GoPro Hero3 Controller
==============================

<p>Builds off of the gopro API developed by kschzt: https://github.com/kschzt/gopro</p>

<p>Requires node.js to be installed on your machine</p>

<p>To connect to the camera, you must have a network adapter linked up to the wifi IP address given off my the camera. Then create a camera variable using your main js.</p>

<pre><code>var cam = new Camera('10.5.5.9', 'password_here')</code></pre>

<p>To initialize the program, run:</p>

<pre><code>node main.js</code></pre>

The website should now be running on http://localhost:8080/index