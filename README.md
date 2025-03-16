# logseq-plugin-tocgen
Generate a table of contents (TOC) for any page or block, allowing quick access to content. Additionally, it provides buttons to scroll to the top and bottom of the page. The TOC is generated based on block hierarchy.

_This is a fork of the minimized version since the original author (https://github.com/sethyuan/) unfortunately deleted all of his excellent Logseq plugins._

## Features

- Automatically syncs with content
- Shift-click to open in the sidebar
- Multiple expand/collapse options
- Hold Alt and click the arrow to expand/collapse all descendants
- Real-time tracking of the editing position with TOC highlighting
- Fully supports embedded blocks and pages
- Drag and drop to manage document structure within the TOC
- Dynamic TOC that updates with changes in the main editing page
- Fixed-height TOC that scrolls with the page content
- Quickly open the TOC in the sidebar via the page menu or toolbar
- Optional buttons to quickly return to the top or bottom of the page
- Option to automatically return to the top when switching pages or to the last position when revisiting

Check the plugin settings for customization options.

## Usage Demonstration

### Scenario 0: Right-click Menu
https://user-images.githubusercontent.com/3410293/216609543-9edcf0de-6a87-441a-a599-0b50511bb713.mp4
### Scenario 1: Dynamic TOC

https://user-images.githubusercontent.com/3410293/196385678-ba12ad05-6729-4909-b527-83f5d062fd07.mp4

### Scenario 2: Inline TOC


### Support for Embedded Block/Page TOC Generation



The demonstration above uses the [Another Embed](https://github.com/sethyuan/logseq-plugin-another-embed) plugin, which is recommended. The script for shortening namespaces is part of my `custom.js`, available [here](https://gist.github.com/sethyuan/4ea9ed4305d0145ad565b2128ae6cef4).

## Usage Examples

To generate a TOC that dynamically updates based on the current page:

```
{{renderer :tocgen2, *}}
```

To specify a fixed TOC height, making it scroll with the page content (CSS-compliant units, `auto` for dynamic height):

```
{{renderer :tocgen2, *, auto}}
{{renderer :tocgen2, *, 300px}}
```

To generate a TOC for the current page:

```
{{renderer :tocgen2}}
{{renderer :tocgen2, [[]]}}
```

To create a TOC for a specific page (use `[[` to search for a page):

```
{{renderer :tocgen2, pagename}}
{{renderer :tocgen2, [[pagename]]}}
```

To generate a TOC for a specific block, paste its reference:

```
{{renderer :tocgen2, ((block-reference))}}
```

To specify TOC depth levels:

```
{{renderer :tocgen2, [[]], auto, 2}}
{{renderer :tocgen2, [[pagename]], auto, 2}}
{{renderer :tocgen2, ((block-reference)), auto, 2}}
```

To include only Markdown headings (H1-Hn, `h`) or any block as a heading (`any`):

```
{{renderer :tocgen2, [[page name]], auto, 1, h}}
{{renderer :tocgen2, [[page name]], auto, 1, any}}
```

To exclude a block from the TOC, add the `toc:: no` property to the block.

## Custom Styles

Customize styles using the following CSS classes:

- `.kef-tocgen-page` for pages
- `.kef-tocgen-block` for blocks
- `.kef-tocgen-active-block` for the currently edited block

Add custom styles in `custom.css`:

```css
.kef-tocgen-page {
  cursor: pointer;
  line-height: 2;
}
.kef-tocgen-block {
  line-height: 1.7;
}
.kef-tocgen-active-block {
  font-size: 1.1em;
  font-weight: 600;
}
```

You can also customize the dynamic TOC’s appearance when no active page is detected using `.kef-tocgen-noactivepage`:

```css
.kef-tocgen-noactivepage::before {
  content: "🈚️";
}
```

## Buy ~~me~~/him a coffee

If you find this plugin helpful and would like to support its development, consider making a donation by scanning the QR codes below. Thank you for your support!

![wx](https://user-images.githubusercontent.com/3410293/236807219-cf21180a-e7f8-44a9-abde-86e1e6df999b.jpg) ![ap](https://user-images.githubusercontent.com/3410293/236807256-f79768a7-16e0-4cbf-a9f3-93f230feee30.jpg)

