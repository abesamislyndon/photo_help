<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/assets/js/ie10-viewport-bug-workaround.js&quot;</h2>

  
<p><code>Rails.root: /home/dondon/Desktop/help_photo</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.1.0) lib/web_console/middleware.rb:37:in `call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">railties (4.2.0) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">rack (1.6.0) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">rack (1.6.0) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">activesupport (4.2.0) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/static.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.0) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">railties (4.2.0) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">railties (4.2.0) lib/rails/application.rb:164:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (1.6.0) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.0) lib/rack/handler/webrick.rb:89:in `service&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.1.0) lib/web_console/middleware.rb:37:in `call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">railties (4.2.0) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">rack (1.6.0) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">rack (1.6.0) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">activesupport (4.2.0) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/static.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.0) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">railties (4.2.0) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">railties (4.2.0) lib/rails/application.rb:164:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (1.6.0) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.0) lib/rack/handler/webrick.rb:89:in `service&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/home/dondon/.rvm/rubies/ruby-2.2.0/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frame_id = target.dataset.frameId;

        if (selectedFrame) {
          selectedFrame.className = selectedFrame.className.replace("selected", "");
        }

        target.className += " selected";
        selectedFrame = target;

        // Change the extracted source code
        changeSourceExtract(frame_id);
      });

      function changeSourceExtract(frame_id) {
        var el = document.getElementById('frame-source-' + frame_id);
        if (currentSource && el) {
          currentSource.className += " hidden";
          el.className = el.className.replace(" hidden", "");
          currentSource = el;
        }
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='pages#index'>
    pages#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='pages_login'>
      pages_login<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/pages/login(.:format)' data-regexp='^\/pages\/login(?:\.([^\/.?]+))?$'>
    /pages/login(.:format)
  </td>
  <td data-route-reqs='pages#login'>
    pages#login
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='pages_result_page'>
      pages_result_page<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/pages/result_page(.:format)' data-regexp='^\/pages\/result_page(?:\.([^\/.?]+))?$'>
    /pages/result_page(.:format)
  </td>
  <td data-route-reqs='pages#result_page'>
    pages#result_page
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // Iterates each element through a function
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  // Sets innerHTML for an element
  function setContent(elem, text) {
    elem.innerHTML = text;
  }

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if the user input (sanitized as a path) matches the regexp data attribute
    function checkExactMatch(section, elem, value) {
      var string = sanitizePath(value),
          regexp = elem.getAttribute("data-regexp");

      showMatch(string, regexp, section, elem);
    }

    // Check if the route path data attribute contains the user input
    function checkFuzzyMatch(section, elem, value) {
      var string = elem.getAttribute("data-route-path"),
          regexp = value;

      showMatch(string, regexp, section, elem);
    }

    // Display the parent <tr> element in the appropriate section when there's a match
    function showMatch(string, regexp, section, elem) {
      if(string.match(RegExp(regexp))) {
        section.appendChild(elem.parentNode.cloneNode(true));
      }
    }

    // Check if there are any matched results in a section
    function checkNoMatch(section, defaultText, noMatchText) {
      if (section.innerHTML === defaultText) {
        setContent(section, defaultText + noMatchText);
      }
    }

    // Ensure path always starts with a slash "/" and remove params or fragments
    function sanitizePath(path) {
      var path = path.charAt(0) == '/' ? path : "/" + path;
      return path.replace(/\#.*|\?.*/, '');
    }

    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        searchElem      = document.querySelector('#search'),
        exactMatches    = document.querySelector('#exact_matches'),
        fuzzyMatches    = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        setContent(exactMatches, "");
        setContent(fuzzyMatches, "");
      }
    }

    // On key press perform a search for matching paths
    searchElem.onkeyup = function(e){
      var userInput         = searchElem.value,
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + escape(sanitizePath(userInput)) +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + escape(userInput) +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      // Clear out results section
      setContent(exactMatches, defaultExactMatch);
      setContent(fuzzyMatches, defaultFuzzyMatch);

      // Display exact matches and fuzzy matches
      each(regexpElems, function(elem) {
        checkExactMatch(exactMatches, elem, userInput);
        checkFuzzyMatch(fuzzyMatches, elem, userInput);
      })

      // Display 'No Matches' message when no matches are found
      checkNoMatch(exactMatches, defaultExactMatch, noExactMatch);
      checkNoMatch(fuzzyMatches, defaultFuzzyMatch, noFuzzyMatch);
    }
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      each(elems, function(elem) {
        setContent(elem, val);
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      each(elems, function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  

<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;sJyD+RrKe2l19C5XuJmvF1Xbk+qngft2zjLket6OVRg=&quot;
session_id: &quot;10896f3f8edfbf0e4022b1ffcb6f1f8a&quot;</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.1&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8&quot;
HTTP_CACHE_CONTROL: &quot;max-age=0&quot;
REMOTE_ADDR: &quot;127.0.0.1&quot;
REMOTE_HOST: &quot;127.0.0.1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


</body>
</html>
<div id="console"
  data-remote-path='console/repl_sessions/036d3adf4143f065d47b32969ad58f47'
  data-initial-prompt='>> '>
</div>


<script type="text/javascript">
(function() {
  // DOM helpers
function hasClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  return el.className.match(regex);
}

function addClass(el, className) {
  el.className += " " + className;
}

function removeClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  el.className = el.className.replace(regex, '');
}

function removeAllChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;');
}

// Add CSS styles dynamically. This probably doesnt work for IE <8.
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = "#console { position: fixed; left: 0; bottom: 0; width: 100%; height: 148px; border: 1px solid; padding: 0 0 4px 0; overflow: none; margin: 0; background: none repeat scroll 0% 0% #333; z-index: 9999; }\n#console div.console-inner { font-family: monospace; font-size: 11px; height: 100%; overflow: auto; background: #333; border: 0; padding: 0; margin: 0; }\n#console div.console-prompt-box { color: #FFF; }\n#console pre.console-message { color: #1AD027; margin: 0; border: 0; white-space: pre-wrap; background-color: #333; padding: 0; }\n#console div.console-focus span.console-cursor { background: #FEFEFE; color: #333; font-weight: bold; }\n#console div#resizer { width: 100%; height: 4px; cursor: ns-resize; }\n#console input#clipboard { height: 0px; padding: 0px; margin: 0px; width: 0px; margin-left: -1000px; }\n#console span.console-prompt-label { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n#console pre.console-prompt-display { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n"
;
document.getElementsByTagName('head')[0].appendChild(style);

/**
 * Constructor for command storage.
 * It uses localStorage if available. Otherwise fallback to normal JS array.
 */
function CommandStorage() {
  this.previousCommands = [];
  var previousCommandOffset = 0;
  var hasLocalStorage = typeof window.localStorage !== 'undefined';
  var STORAGE_KEY = "web_console_previous_commands";
  var MAX_STORAGE = 100;

  if (hasLocalStorage) {
    this.previousCommands = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    previousCommandOffset = this.previousCommands.length;
  }

  this.addCommand = function(command) {
    previousCommandOffset = this.previousCommands.push(command);

    if (previousCommandOffset > MAX_STORAGE) {
      this.previousCommands.splice(0, 1);
      previousCommandOffset = MAX_STORAGE;
    }

    if (hasLocalStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.previousCommands));
    }
  };

  this.navigate = function(offset) {
    previousCommandOffset += offset;

    if (previousCommandOffset < 0) {
      previousCommandOffset = -1;
      return null;
    }

    if (previousCommandOffset >= this.previousCommands.length) {
      previousCommandOffset = this.previousCommands.length;
      return null;
    }

    return this.previousCommands[previousCommandOffset];
  }
}

// HTML strings for dynamic elements.
var consoleInnerHtml = "<div id=\'resizer\'><\/div>\n<div class=\'console-inner\'><\/div>\n<input id=\'clipboard\' type=\'text\'>\n"
;
var promptBoxHtml = "<span class=\'console-prompt-label\'><\/span>\n<pre class=\'console-prompt-display\'><\/pre>\n"
;

// REPLConsole Constructor
function REPLConsole(config) {
  this.commandStorage = new CommandStorage();
  this.prompt = config && config.promptLabel ? config.promptLabel : ' >>';
  this.commandHandle = config && config.commandHandle ? config.commandHandle : function() { return this; }
}


REPLConsole.prototype.install = function(container) {
  var _this = this;

  document.onkeydown = function(ev) {
    if (_this.focused) { _this.onKeyDown(ev); }
  };

  document.onkeypress = function(ev) {
    if (_this.focused) { _this.onKeyPress(ev); }
  };

  document.addEventListener('mousedown', function(ev) {
    var el = ev.target || ev.srcElement;

    if (el) {
      do {
        if (el === container) {
          _this.focus();
          return;
        }
      } while (el = el.parentNode);

      _this.blur();
    }
  });

  // Render the console.
  container.innerHTML = consoleInnerHtml;

  // Make the console resizable.
  document.getElementById('resizer').addEventListener('mousedown', function(ev) {
    var startY                   = ev.clientY;
    var startHeight              = parseInt(document.defaultView.getComputedStyle(container).height, 10);
    var consoleInner             = document.getElementsByClassName('console-inner')[0];
    var innerScrollTopStart      = consoleInner.scrollTop;
    var innerClientHeightStart   = consoleInner.clientHeight;

    var doDrag = function(e) {
      container.style.height = (startHeight + startY - e.clientY) + 'px';
      consoleInner.scrollTop = innerScrollTopStart + (innerClientHeightStart - consoleInner.clientHeight);
    };

    var stopDrag = function(e) {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    };

    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  });

  // Initialize
  this.inner = container.getElementsByClassName('console-inner')[0];
  this.clipboard = document.getElementById('clipboard');
  this.newPromptBox();
};

REPLConsole.prototype.focus = function() {
  if (! this.focused) {
    this.focused = true;
    if (! hasClass(this.inner, "console-focus")) {
      addClass(this.inner, "console-focus");
    }
    this.scrollToBottom();
  }
};

REPLConsole.prototype.blur = function() {
  this.focused = false;
  removeClass(this.inner, "console-focus");
};

/**
 * Add a new empty prompt box to the console.
 */
REPLConsole.prototype.newPromptBox = function() {
  // Remove the caret from previous prompt display if any.
  if (this.promptDisplay) {
    this.removeCaretFromPrompt();
  }

  var promptBox = document.createElement('div');
  promptBox.className = "console-prompt-box";
  promptBox.innerHTML = promptBoxHtml;
  this.promptLabel = promptBox.getElementsByClassName('console-prompt-label')[0];
  this.promptDisplay = promptBox.getElementsByClassName('console-prompt-display')[0];
  // Render the prompt box
  this.setInput("");
  this.promptLabel.innerHTML = this.prompt;
  this.inner.appendChild(promptBox);
  this.scrollToBottom();
};

/**
 * Remove the caret from the prompt box,
 * mainly before adding a new prompt box.
 * For simplicity, just re-render the prompt box
 * with caret position -1.
 */
REPLConsole.prototype.removeCaretFromPrompt = function() {
  this.setInput(this._input, -1);
};

REPLConsole.prototype.setInput = function(input, caretPos) {
  this._caretPos = caretPos === undefined ? input.length : caretPos;
  this._input = input;
  this.renderInput();
};

/**
 * Add some text to the existing input.
 */
REPLConsole.prototype.addToInput = function(val, caretPos) {
  caretPos = caretPos || this._caretPos;
  var before = this._input.substring(0, caretPos);
  var after = this._input.substring(caretPos, this._input.length);
  var newInput =  before + val + after;
  this.setInput(newInput, caretPos + val.length);
};

/**
 * Render the input prompt. This is called whenever
 * the user input changes, sometimes not very efficient.
 */
REPLConsole.prototype.renderInput = function() {
  // Clear the current input.
  removeAllChildren(this.promptDisplay);

  var promptCursor = document.createElement('span');
  promptCursor.className = "console-cursor";
  var before, current, after;

  if (this._caretPos < 0) {
    before = this._input;
    current = after = "";
  } else if (this._caretPos === this._input.length) {
    before = this._input;
    current = "\u00A0";
    after = "";
  } else {
    before = this._input.substring(0, this._caretPos);
    current = this._input.charAt(this._caretPos);
    after = this._input.substring(this._caretPos + 1, this._input.length);
  }

  this.promptDisplay.appendChild(document.createTextNode(before));
  promptCursor.appendChild(document.createTextNode(current));
  this.promptDisplay.appendChild(promptCursor);
  this.promptDisplay.appendChild(document.createTextNode(after));
};

REPLConsole.prototype.writeOutput = function(output) {
  var consoleMessage = document.createElement('pre');
  consoleMessage.className = "console-message";
  consoleMessage.innerHTML = escapeHTML(output);
  this.inner.appendChild(consoleMessage);
  this.newPromptBox();
};

REPLConsole.prototype.onEnterKey = function() {
  var input = this._input;

  if(input != "" && input !== undefined) {
    this.commandStorage.addCommand(input);
  }

  this.commandHandle(input);
};

REPLConsole.prototype.onNavigateHistory = function(offset) {
  var command = this.commandStorage.navigate(offset) || "";
  this.setInput(command);
};

/**
 * Handle control keys like up, down, left, right.
 */
REPLConsole.prototype.onKeyDown = function(ev) {
  switch (ev.keyCode) {
    case 13:
      // Enter key
      this.onEnterKey();
      ev.preventDefault();
      break;
    case 80:
      // Ctrl-P
      if (! ev.ctrlKey) break;
    case 38:
      // Up arrow
      this.onNavigateHistory(-1);
      ev.preventDefault();
      break;
    case 78:
      // Ctrl-N
      if (! ev.ctrlKey) break;
    case 40:
      // Down arrow
      this.onNavigateHistory(1);
      ev.preventDefault();
      break;
    case 37:
      // Left arrow
      var caretPos = this._caretPos > 0 ? this._caretPos - 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 39:
      // Right arrow
      var length = this._input.length;
      var caretPos = this._caretPos < length ? this._caretPos + 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 8:
      // Delete
      this.deleteAtCurrent();
      ev.preventDefault();
      break;
    default:
      break;
  }

  if (ev.ctrlKey || ev.metaKey) {
    // Set focus to our clipboard in case they hit the "v" key
    this.clipboard.focus();
    if (ev.keyCode == 86) {
      // Pasting to clipboard doesn't happen immediately,
      // so we have to wait for a while to get the pasted text.
      var _this = this;
      setTimeout(function() {
        _this.addToInput(_this.clipboard.value);
        _this.clipboard.value = "";
        _this.clipboard.blur();
      }, 10);
    }
  }

  ev.stopPropagation();
};

/**
 * Handle input key press.
 */
REPLConsole.prototype.onKeyPress = function(ev) {
  // Only write to the console if it's a single key press.
  if (ev.ctrlKey || ev.metaKey) { return; }
  var keyCode = ev.keyCode || ev.which;
  this.insertAtCurrent(String.fromCharCode(keyCode));
  ev.stopPropagation();
  ev.preventDefault();
};

/**
 * Delete a character at the current position.
 */
REPLConsole.prototype.deleteAtCurrent = function() {
  if (this._caretPos > 0) {
    var caretPos = this._caretPos - 1;
    var before = this._input.substring(0, caretPos);
    var after = this._input.substring(this._caretPos, this._input.length);
    this.setInput(before + after, caretPos);
  }
};

/**
 * Insert a character at the current position.
 */
REPLConsole.prototype.insertAtCurrent = function(char) {
  var before = this._input.substring(0, this._caretPos);
  var after = this._input.substring(this._caretPos, this._input.length);
  this.setInput(before + char + after, this._caretPos + 1);
};

REPLConsole.prototype.scrollToBottom = function() {
  this.inner.scrollTop = this.inner.scrollHeight;
};

window.REPLConsole = REPLConsole;

}).call(this);
</script>

<script type="text/javascript">
(function() {
  var consoleDiv = document.getElementById('console');
var replConsole = new REPLConsole({
  promptLabel: consoleDiv.dataset.initialPrompt,
  commandHandle: function(line) {
    var _this = this;
    var xhr = new XMLHttpRequest();
    var url = consoleDiv.dataset.remotePath;
    var params = "input=" + encodeURIComponent(line);

    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(params);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        _this.writeOutput(response.output);
      }
    }
  }
});

replConsole.install(consoleDiv);

}).call(this);
</script>


  <script type="text/javascript">
(function() {
  // Try intercept traces links in Rails 4.2.
var traceFrames = document.getElementsByClassName('trace-frames');
var selectedFrame, currentSource = document.getElementById('frame-source-0');

// Add click listeners for all stack frames
for (var i = 0; i < traceFrames.length; i++) {
  traceFrames[i].addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target;
    var frameId = target.dataset.frameId;

    // Change the binding of the console.
    changeBinding(frameId, function() {
      if (selectedFrame) {
        selectedFrame.className = selectedFrame.className.replace("selected", "");
      }

      target.className += " selected";
      selectedFrame = target;
    });

    // Change the extracted source code
    changeSourceExtract(frameId);
  });
}

function changeBinding(frameId, callback) {
  var consoleEl = document.getElementById('console');
  if (! consoleEl) { return; }
  var url = consoleEl.dataset.remotePath + "/trace";
  var params = "frame_id=" + encodeURIComponent(frameId);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(params);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback();
    }
  }
}

function changeSourceExtract(frameId) {
  var el = document.getElementById('frame-source-' + frameId);
  if (currentSource && el) {
    currentSource.className += " hidden";
    el.className = el.className.replace(" hidden", "");
    currentSource = el;
  }
}

// Push the error page body upwards the size of the console.
//
// While, I wouldn't like to do that on every custom page (so I don't screw
// user's layouts), I think a lot of developers want to see all of the content
// on the default Rails error page.
//
// Since it's quite special as is now, being a bit more special in the name of
// better user experience, won't hurt.
document.addEventListener('DOMContentLoaded', function() {
  var consoleElement = document.getElementById('console');
  var resizerElement = document.getElementById('resizer')
  var containerElement = document.getElementById('container');

  function setContainerElementBottomMargin(pixels) {
    containerElement.style.marginBottom = pixels + 'px';
  }

  var currentConsoleElementHeight = consoleElement.offsetHeight;
  setContainerElementBottomMargin(currentConsoleElementHeight);

  resizerElement.addEventListener('mousedown', function(event) {
    function recordConsoleElementHeight(event) {
      resizerElement.removeEventListener('mouseup', recordConsoleElementHeight);

      var currentConsoleElementHeight = consoleElement.offsetHeight;
      setContainerElementBottomMargin(currentConsoleElementHeight);
    }

    resizerElement.addEventListener('mouseup', recordConsoleElementHeight);
  });
});

}).call(this);
</script>
