<p>Builds off of the gopro API developed by kschzt: https://github.com/kschzt/gopro</p>

<p>Requires node.js to be installed on your machine</p>

<p>To connect to the camera, you must have a network adapter linked up to the wifi IP address given off my the camera. Then create a camera variable using your main js.</p>

<pre><code>var cam = new Camera('10.5.5.9', 'password_here')</code></pre>