JavaScript Delayed Triggers
-------

This package is designed to provide a simple solution to being able to trigger certian hidden iframes, i.e. pixels, at certian points in time from after the page has loaded.


Installation
-------

You simply need to copy the code within [index.min.js](./src/index.min.js) into the body of the website, and follow the usage instructions outlined below. The minified code has been copied here for ease:

``` html
<script>
    (function(w,d,s,u){var e=d.getElementsByTagName(s)[0];for(var i in u){
    setTimeout(function(w,d,a,e){var j=d.createElement('iframe');j.width=1;
    j.height=1;j.style="display: none;";j.src=a;e.appendChild(j);},(i*1000),
    w,d,u[i],e);}})(window,document,'body',{
        0  : 'https://www.google.co.uk/timeout/0',
        5  : 'https://www.google.co.uk/timeout/5',
        10 : 'https://www.google.co.uk/timeout/10'
    });
</script>
```


Usage
-------

All that's needed is that the options within the above snippet are modified for your needs. For example, let's use the following scenario:

1. Trigger a call to `https://analytics.google.com/pixel.png` after 7 seconds of the user being on the page, and
1. Trigger a secondary call to `https://analytics.bing.com/long-user-session.png` after 20 seconds of being on the page.

The above would provide the following options, with the key's being time (in seconds) and the values being the endpoint to trigger:

``` javascript
{
    7  : 'https://analytics.google.com/pixel.png',
    20 : 'https://analytics.bing.com/long-user-session.png'
}
```

Which, when added to the main core of the script, would produce the following which should be added to the page:

``` html
<script>
    (function(w,d,s,u){var e=d.getElementsByTagName(s)[0];for(var i in u){
    setTimeout(function(w,d,a,e){var j=d.createElement('iframe');j.width=1;
    j.height=1;j.style="display: none;";j.src=a;e.appendChild(j);},(i*1000),
    w,d,u[i],e);}})(window,document,'body',{
        7  : 'https://analytics.google.com/pixel.png',
        20 : 'https://analytics.bing.com/long-user-session.png'
    });
</script>
```

License
-------

**jedkirby/js-delayed-triggers** is licensed under the MIT license.  See the [LICENSE](LICENSE) file for more details.