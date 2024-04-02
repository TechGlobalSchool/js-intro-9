# HTML and CSS

## Introduction

- metadata
    -  keywords, author, title, og etc.

- inline vs block
    - img, span is an inline element
    - p is a block element

- style
 - **inline**: apply css right to the element
 
 ```html
    <p style="color: red">Text</p>
 ```
 - **internal**: apply css inside html head 

```html
<head>
    <style>
        p {color: red}
    </style>
</head>
<p>Text</p>
```

- **external**:  Apply css via importing to html
```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<p>Text</p>
```



## Table
 - Parent element: `table`
 - `thead` help organize our head elements
 - `th` - table heading
 - `tbody` - helps organize our body content
 - `tr` - table row
 - `td` - table data
 - `tfoot` - helps organize bottom content