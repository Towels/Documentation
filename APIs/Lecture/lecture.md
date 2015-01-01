# Lecture REST API

### Changelog:

|Version|Date|Description|
|-------|----|-----------|
|0.1.0|30.12.2014|Initial Documentation|

### Overview:

The Lecture API is responsible for serving information about a lecture or a room stored on the Graph of Content _(GoC)_ server.

All of the following calls are concatenated to the following URL:
```
[protocol]://[hostname]:[port]/[api-dir]/lecture
```  
In the current _(30.12.2014)_ testing environment this would be:
```
http://localhost:8080/resources/lecture
```

### Operations:

1. Every IO resource that is not HTTP is encoded in JSON.
2. TODO : Formatting
3. TODO : come up with more general guidelines. maybe put this into another file?

|Operation|Path|Example|Description|
|---------|----|-------|-----------|
|GET|`/`|`[{"id" : "int", "course": "String", "university": "String", "professor": String"}, ... ]`} |Returns all lectures the user can see, without the GoC and it's contents.|
|Get|`/:id`|`[{"id" : "int", "course": "String", "university": "String", "professor": String"}]`|Returns one single lecture that matches  the id provided without the GoC and it's contents.|
|Get|`/:id/graph`|`[{"id": "int", "title": "String", "file" : "File", "subChapters": [{"id" : "int"}, ...], "subSections": [{"id" : "int"}, ...]}, ... ]`|Returns the top chapters of the graph.|
|Get|`/:id/graph/:id`|`[{"id": "int", "title": "String", "file" : "File", "subChapters": [{"id" : "int"}, ...], "subSections": [{"id" : "int"}, ...]}]|Returns a specific node of the graph, e.g. by the id referenced in a top chapter as some type of subnode.|