# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

# Opdracht 1 Taskmanagers
I'm going to do researchs for two taskmanagers Gulp and Grunt. I want to take a look at those two because when i had my internship i heard them talk about those two a lot. They had there projects running on grunt and dicided to change to gulp because it was faster and easier in use. 

### Grunt vs gulp

### similarities
* They are task runners that can automate the development workflow
* We write the task we want them to run using javascript
* They both need node and npm in order to work


### Differences
* The way they config a task Grunt is configuration-based en gulp is stream based. 
* The way they execute a task. Grunt runs the processes you want to run task after task. And gulp tries to run the process parallel (at the same time) witch is mutch faster.

### Example Grunt Task Configuration 

```
sk Configuration

module.exports = function(grunt) {
  // Report the task-execution time in the command line
  require('time-grunt')(grunt);
  // Task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Combine all CSS files found inside the src directory
    concat_css: {
      dist: {
        src: ['src/*.css'],
        dest: 'css/styles.css'
      }
    },
    // Minify the stylesheet
    cssmin: {
      target: {
        // Write the minified file in the css directory
        files: [{
          'css/styles.min.css': ['css/styles.css']
        }]
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Use `grunt` command to run the task
  grunt.registerTask('default', ['concat_css', 'cssmin']);
}
```

### Example Grunt Task Configuration
```
// Load the plugins
var gulp = require('gulp');
var concatenate = require('gulp-concat-css');
var minify = require('gulp-cssmin');
var duration = require('gulp-duration');
// Task configuration
gulp.task('default', function() {
  gulp.src('src/*.css')
  // Combine all CSS files found inside the src directory
  .pipe(concatenate('styles.min.css'))
  // Minify the stylesheet
  .pipe(minify())
  // Report the task-execution time in the command line
  .pipe(duration('Execution Time: '))
  // Write the minified file in the css directory
  .pipe(gulp.dest('css/'));
});
// Use `gulp` command to run the task
```

### Conclusion running configuration

#### Grunt executes slow
1. Open the processed file from the last process
2. Run the current process
3. Save the changes
4. Close the current processed file so that the next process can access it


#### Gulp executes Fast
Gulp doesn't need to make temporary files inbetween processes. The code that comes out of one process goes directly in to the next one. (steam-based).

### Conclusion 
Gulp wins because it is less code to write and it is faster dan grunt. 

##### Bron
* http://sixrevisions.com/web-development/grunt-vs-gulp/


# Assignment 1: Optimise HTTP request
*With gulp Javascript minified

before & after: 
![alt tag](https://github.com/heleensnoeck/looklive-server2/blob/gulp/heleen/week3/public/screenshots/js.png)

*With gulp Css minified

before & after: 
![alt tag](https://github.com/heleensnoeck/looklive-server2/blob/gulp/heleen/week3/public/screenshots/css.png)

# Assignment 2: Optimise images
before & after:
![alt tag](../screenshots/1_original_842ms.png)

# Assignment 3: Optimise web font
*I download the Ralleway font with fontsquirrel, without glyphs


