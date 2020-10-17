## Prototype extension

How to install

* go to chrome://extensions in your browser
* select developr mode
* press `Load UNpacked`
  * point to the directory 
* now depedning on the website, the selecotrs, in vold, you need to write the correct
  javascript to match. In my case, i wanted to press leftarrow and right arrow on a specific website mangasomething to activate the left or right navigation.

For chrome, it's the same thing except you do about:debugging
`about:debugging#/runtime/this-firefox`
load your temporary addon and your good to go.

In the example provided, chiomega.js is a sororioty website with a slide show.
The extension will catch that the chiomega site has loaded and run some listners on the tp-rightarrow and tp-leftarrow classes which will trigger on right and left arrow keypresses. 

manifest.json governs what sites to listen to and what javascript to run.

TODO List
* as a user, i want to determine what website i want to listen to and what javascript to run AFTER i load the website, not before. I want this preference to be saved.
* as a user i want a list of commonly used templates to choose from.
  * for example
    * activate template on Click
    * popup telling me what key i want to bind action to.
    * back to webpage
    * I click on a ui element
    * ui element's class is recorded
    * on binded key action (click) i perform click on the class.
    * it template onResize then the action will be performed on Resize without prompting me for a keyboard bind action.