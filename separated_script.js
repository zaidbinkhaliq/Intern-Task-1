

            WebFont.load({
                google: {
                    families: ["Varela Round:400", "Bitter:400,700,400italic", "Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Inconsolata:400,700", "Cabin:regular,500,500italic,600,600italic,700"]
                }
            });
        

            !function(o, c) {
                var n = c.documentElement
                  , t = " w-mod-";
                n.className += t + "js",
                ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
            }(window, document);
        

            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }
                ,
                i[r].l = 1 * new Date();
                a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            }
            )(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-168124349-1', 'auto');
            ga('send', 'pageview');
        


            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('config', 'G-9MJZ4L0RE8');
        

            (function(h, o, t, j, a, r) {
                h.hj = h.hj || function() {
                    (h.hj.q = h.hj.q || []).push(arguments)
                }
                ;
                h._hjSettings = {
                    hjid: 2849940,
                    hjsv: 6
                };
                a = o.getElementsByTagName('head')[0];
                r = o.createElement('script');
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
            }
            )(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        

            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0]
                  , j = d.createElement(s)
                  , dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-TC4B3FN');
        



            // Get the category, action and label from the element and send it to GA. The action is optional, because mostly it will be a click event.
            var trackClickEvent = function() {
                console.log("tracking click event")
                var eventCategory = this.getAttribute("data-event-category");
                var eventAction = this.getAttribute("data-event-action");
                var eventLabel = this.getAttribute("data-event-label");
                var eventValue = this.getAttribute("data-event-value");
                ga('send', 'event', eventCategory, (eventAction != undefined && eventAction != '' ? eventAction : 'Click'), eventLabel, eventValue);
                // Adding gtag for GA4
                if ("gtag"in window) {
                    console.log("gtag present")
                    console.log(eventCategory)
                    console.log(eventLabel)
                    console.log(eventCategory)
                    gtag('event', eventAction, {
                        'event_category': eventCategory,
                        'event_label': eventLabel,
                        'value': eventValue
                    });
                }

            };

            // Find all of the elements on the page which have the class 'ga-event'
            var elementsToTrack = document.getElementsByClassName("ga-event");

            // Add an event listener to each of the elements you found
            var elementsToTrackLength = elementsToTrack.length;
            for (var i = 0; i < elementsToTrackLength; i++) {
                elementsToTrack[i].addEventListener('click', trackClickEvent, false);
            }
        


            var typed = new Typed(".typed-words",{
                strings: ["running contests", "selecting leaders", "conducting surveys", "taking polls", "educating voters", "making decisions"],
                typeSpeed: 40,
                backSpeed: 50,
                backDelay: 1800,
                startDelay: 3000,
                loop: true,
                showCursor: false,
                cursorChar: "|",
                attr: null,
                fadeOut: true,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 300,
            });
        