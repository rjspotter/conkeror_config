
add_delicious_webjumps("saint_cypher");

define_webjump("github", "http://github.com/search?q=%s&type=Everything");

define_webjump("duckduckgo", "http://duckduckgo.com/?q=%s");

define_webjump("images", "http://www.google.com/images?q=%s&safe=off", $alternative = "http://www.google.com/imghp?as_q=&safe=off");

define_webjump('gmail','https://gmail.com/');
define_webjump('ymail','https://mail.google.com/a/synthasite.com/?account_id=randall%40synthasite.com');

define_webjump('jira', 'https://yolainc.jira.com/');

define_webjump('calendar', 'http://google.com/calendar');
define_webjump('reader', 'http://google.com/reader');

define_webjump('launchpad','https://launchpad.37signals.com/');

webjumps.g = webjumps.duckduckgo;

