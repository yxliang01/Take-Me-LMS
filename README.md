# Take Me LMS!

Redirect me to LMS login page now! Nothing interesting here! For the University of Melbourne.

***Motivation***

Every time, I type `lms` to the address bar, chrome nicely prompts me `lms.unimelb.edu.au`. However, it's not the LMS that I want! Over those days, I didn't find the landing page appealing although it looks a lot better nowadays.

## Installation

[Take Me LMS @ Google Chrome Store](https://chrome.google.com/webstore/detail/take-me-lms-unimelb/ddchmncpocfpfelhaodfnnjeokbobgci)

## For Developer

### Installation

    $ npm install

### Usage

Run `$ gulp --watch` and load the `dist`-directory into chrome.

### Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.

1. All js-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

### Tasks

#### Build

    $ gulp


| Option         | Description                                                                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--watch`      | Starts a livereload server and watches all assets. <br>To reload the extension on change include `livereload.js` in your bundle.                      |
| `--production` | Minifies all assets                                                                                                                                   |
| `--verbose`    | Log additional data to the console.                                                                                                                   |
| `--vendor`     | Compile the extension for different vendors (chrome, firefox, opera)  Default: chrome                                                                 |
| `--sourcemaps` | Force the creation of sourcemaps. Default: !production                                                                                                |


#### pack

Zips your `dist` directory and saves it in the `packages` directory.

    $ gulp pack --vendor=firefox

#### Version

Increments version number of `manifest.json` and `package.json`,
commits the change to git and adds a git tag.

    $ gulp patch      // => 0.0.X

or

    $ gulp feature    // => 0.X.0

or

    $ gulp release    // => X.0.0


### Globals

The build tool also defines a variable named `ENV` in your scripts. It will be set to `development` unless you use the `--production` option.


**Example:** `./app/background.js`

	if(ENV === 'development'){
		console.log('We are in development mode!');
	}







