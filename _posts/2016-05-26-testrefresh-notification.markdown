---
title:  "Test Refresh Notification"
date:   2016-05-26 01:04:43
categories: [clojure]
tags: [clojure test-fresh plugins]
---

During my work with clojure, [test-refresh] is one of my favourite plugin, which allows me to feedback very fast whether my code change has broken tests. Test-refresh offers a useful feature to notify you with result. The notification can be set up easily. I've tested it on Mac OSX and Ubuntu    

### Mac OS X
1. Install terminal-notifier

``` ruby
$ brew install terminal-notifier
```

2. Configure the Leiningen's profiler your/home/folder/.lein/profiles.clj

```clojure
  {:user {:plugins      [[com.jakemccrary/lein-test-refresh "0.11.0"]]
         :test-refresh  {:notify-command ["terminal-notifier" 
                                          "-title" "Tests"
                                          "-message"]}}}
```

### Ubuntu
1. Install notify

``` ruby
$ sudo apt-get install libnotify-bin
```

2. Configure the Leiningen's profiler your/home/folder/.lein/profiles.clj

```clojure
 {:user {:plugins      [[com.jakemccrary/lein-test-refresh "0.11.0"]]
        :test-refresh  {:notify-command ["notify-send" "Tests"]}}}
```

[test-refresh]:  https://github.com/jakemcc/lein-test-refresh
