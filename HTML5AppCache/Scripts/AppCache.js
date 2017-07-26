var appCache = window.applicationCache;

appCache.addEventListener('cached', function (event) {
    console.log('All files downloaded!');
}, false);

// Checking for an update. Always the first event fired in the sequence.
appCache.addEventListener('checking', function (event) {
    console.log('Checking for manifest!');
}, false);

// An update was found. The browser is fetching resources.
appCache.addEventListener('downloading', function (event) {
    console.log('Downloading cache!');
}, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress.
appCache.addEventListener('error', function (event) {
    console.log('An error occurred!');
}, false);

// Fired after the first download of the manifest.
appCache.addEventListener('noupdate', function (event) {
    console.log('No cache updates!');
}, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
appCache.addEventListener('obsolete', function (event) {
    console.log('Manifest cannot be found!');
}, false);

// Fired for each resource listed in the manifest as it is being fetched.
appCache.addEventListener('progress', function (e) {
    console.log('File downloaded!');
}, false);


// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', function (e) {
    console.log('New cache available!');
    //appCache.swapCache();
    //window.location.reload();
}, false);