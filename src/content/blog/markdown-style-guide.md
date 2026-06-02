---
title: "A short Markdown style guide"
description: "A reference post showing how common Markdown elements render on this site."
pubDate: 2026-04-28
tags: ["markdown", "guide"]
---

This post exists mostly as a test page — it shows how the usual Markdown bits
look once they're styled. Handy to glance at when you're writing.

## Headings

Use `##` for sections and `###` for sub-sections. Save the single `#` for the
post title, which the layout already renders for you.

### A sub-section

Body text flows like this. You can **bold** things, use *italics*, add
`inline code`, or [link out](https://astro.build) to other pages.

## Lists

An unordered list:

- First thing
- Second thing
- A nested point
  - and its detail

And an ordered one:

1. Step one
2. Step two
3. Step three

## Quotes

> Writing is thinking. To write well is to think clearly. That's why it's so hard.

## Code

Inline `const x = 1` works, and fenced blocks get syntax highlighting:

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
```

## Tables

| Element | Syntax        |
| ------- | ------------- |
| Bold    | `**text**`    |
| Italic  | `*text*`      |
| Code    | `` `text` ``  |

That covers the essentials. If it renders cleanly here, it'll render cleanly in
a real post.
