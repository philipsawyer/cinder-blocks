# cinder-blocks
##### "super simple HTML grid"

##### [by Andrew Sawyer](http://andrewjsawyer.com)
---
### Add source files
> Add `cinder.css` and `cinder.js` to project folder

### Import Resources - add to HTML head
```
<link rel="stylesheet" href="cinder.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"</script>
<script src="cinder.js"></script>
```

### How to use
1. Make a div with the name “l, m, or s” for different screen sizes. (large, medium, small)
2. Follow “l, m, and s” with a number “1-24”
3. All divs in a “row” must add up to 24 "blocks"
4. Center a div by adding “c” to the end of class name - ex:```class="m8c"```

### Example
```
<div class="l8 m12 s24">
    <p>On large I take up 8 "blocks". On medium I take up 12 "blocks". On small I take up the entire screen.</p>
</div>
<div class="l8 m12 s24">
    <p>On large I take up 8 "blocks". On medium I take up 12 "blocks". On small I take up the entire screen.</p>
</div>
<div class="l8 m8c s24">
    <p>On large I take up 8 "blocks". On medium I am centered. On small I take up the entire screen.</p>
</div>
 ```

### Change Breakpoints
 > At the top of `layout.js` there are variables that can be changed if needed

### To-do
- [ ] Support for nesting
- [ ] Fix l0,m0,s0
- [ ] Fix element reflow when centered (for now you have to reload the page)
