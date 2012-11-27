Presentation
========================

A jQuery plugin to add a slide effect when you click on a link for an other page, with AJAX method.

Installation
============

This plugin require at less _jQuery 1.4_.
Download slidePage.jquery.js or slidePage.jquery.min.js and place it in your website folder.
In you website page, add this code to load the file :

    <script type="text/Javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="slidePage.jquery.js"></script>


Use
===
In this example, we apply the effect slide left on all available link (A tags) in the page 


Then in the Javascript code use this sample code :

    $(document).ready(function(e) {
        $("a").slidePage({direction:"left",pageSpace:50,speed:2000});
    });

Available parameters
===============

* *direction* (default:left) : direction of the slide (up,down,left,right)
* *pageSpace* (default:50) : The space between the 2 page in pixels
* *speed* (default:2000) : The time duration of the effect