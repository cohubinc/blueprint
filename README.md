# Blueprint

Blueprint is a small set of React components for quickly laying out groups of elements.

## Installation

`npm install @cohubinc/blueprint`

`yarn add @cohubinc/blueprint`

## Components

### Stack

Use Stack to vertically position elements.

```
<Stack space={2}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</Stack>
```

**Props**

```
children: ReactNode[] | ReactNode;
space?: number;
alignment?: "center" | "left" | "right";
fullWidth?: boolean;
childrenWidth?: CSSProperties["width"];
style?: CSSProperties;
```

| Prop          |                                                      Description                                                       | Required | Default |
| ------------- | :--------------------------------------------------------------------------------------------------------------------: | -------: | ------: |
| children      |                                       any valid ReactNode or array of ReactNodes                                       |     true |     N/A |
| space         |                                 rem based bottom margin applied to all child elements                                  |    false |       1 |
| alignment     |                                      horizontal alignment of the entire `<Stack>`                                      |    false |  "left" |
| fullWidth     |                            causes `<Stack>` to take 100% of the available horizontal space                             |    false |   false |
| childrenWidth | set the width of any children inside of `<Stack>` to any valid `width` value according to React's `CSSProperties` type |    false |    null |
| style         |                                    any additional style properties needed for Stack                                    |    false |    null |

### Inline

Use Inline to horizontally position elements.

```
<Inline space={2}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</Inline>
```

**Props**

```
children: ReactNode[] | ReactNode;
space?: number;
alignment?: "center" | "left" | "right";
itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
style?: CSSProperties;
```

| Prop          |                                       Description                                       | Required | Default |
| ------------- | :-------------------------------------------------------------------------------------: | -------: | ------: |
| children      |                       any valid ReactNode or array of ReactNodes                        |     true |     N/A |
| space         | rem based right or left margin (depending on what's specified for the `alignment` prop) |    false |       1 |
| alignment     |                      horizontal alignment of the entire `<Inline>`                      |    false |  "left" |
| itemAlignment |                     used to vertically align children of `<Inline>`                     |    false |  "left" |
| style         |                    any additional style properties needed for Stack                     |    false |    null |

### Spread

Use Spread to spread elements out either horizontally or vertically. Think of Spread as a normal CSS flexbox.

**Props**

```
children: ReactElement<any> | ReactElement<any>[];
direction?: "horizontal" | "vertical";
spread?: "between" | "around" | "evenly" | "start" | "end" | "center";
itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
flexChild?: boolean;
style?: CSSProperties;
```

| Prop          |                                Description                                 | Required |      Default |
| ------------- | :------------------------------------------------------------------------: | -------: | -----------: |
| children      |              any valid ReactElement or array of ReactElements              |     true |          N/A |
| direction     |                     the orientation of the `<Spread>`                      |    false | "horizontal" |
| spread        |                  flexbox spacing rule AKA justify-content                  |    false |    "between" |
| itemAlignment |              used to vertically align children of `<Spread>`               |    false |      "start" |
| flexChild     | used for vertical Spreads to allow children to take up all vertical height |    false |         true |
| style         |              any additional style properties needed for Stack              |    false |         null |

### Space

Use Space to insert whitespace between elements.

**Props**

```
height?: CSSProperties["height"];
width?: CSSProperties["width"];
unit?: | "cm" | "mm" | "in" | "px" | "pt" | "pc" | "em" | "rem" | "ex" | "ch" | "vw" | "vh" | "vmin" | "vmax" | "%";
```

| Prop   |             Description             | Required |   Default |
| ------ | :---------------------------------: | -------: | --------: |
| height |     the height of the `<Space>`     |     true | "inherit" |
| width  |     the width of the `<Space>`      |    false | "inherit" |
| unit   | the unit value for height and width |    false |     "rem" |
