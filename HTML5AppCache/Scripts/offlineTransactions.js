var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;

if (!window.indexedDB) {
    alert("Your browser doesn't support IndexedDB");
}

