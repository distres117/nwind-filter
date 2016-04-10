Oliver,

Good job completing the project and adding the README. Note that, your instructions did not get the app up and running, and I had to do a fair amount of troubleshooting to get it going.

Looking at your code it seems like you are well on your way. Good job directivizing your app's components and linking them together using ui-router. Are there any better ways of doing this, perhaps using resolve on your stateProvider to inject data into your directive controllers? Also, I noticed their is no error handling (you commented out one middleware function that looked like a good start).Keep in mind that isn't great UX. Additionally, I notice that you load jquery in, without it playing an obvious role in your app. Angular can replace a lot of jQuery's functionality and is lighter weight. Consider slimming down on your needless assets.


Good work, see you Tuesday.
-Dan