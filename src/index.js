(
    function(win, doc, script, items) {

        var container = doc.getElementsByTagName(script)[0];

        for (var index in items) {

            setTimeout(
                function(win, doc, src, container){

                    var iframe = doc.createElement('iframe');
                        iframe.height = 1;
                        iframe.width = 1;
                        iframe.style = 'display: none;';
                        iframe.src = src;

                    container.appendChild(iframe);

                },
                (index * 1000), // Ensure time is set in seconds, not milliseconds.
                win,
                doc,
                items[index],
                container
            );

        }

    }
)(
    window,
    document,
    'body',
    {
        0  : 'https://www.google.co.uk/timeout/0',
        5  : 'https://www.google.co.uk/timeout/5',
        10 : 'https://www.google.co.uk/timeout/10'
    }
);
