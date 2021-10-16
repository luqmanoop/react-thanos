<div align="center">
<img src="https://i.imgur.com/1XVqHMa.png">
<h1>react-thanos</h1>
<p>React hooks implementation of Google's  <a href="http://google.com/search?q=thanos"><strong>Thanos</strong></a> easter egg</p>
</div>

## Prerequisite
- [NodeJS](https://nodejs.org)
- Project running [React **16.8**](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
## Installation 📦

```bash
npm install react-thanos
```

or with yarn

```bash
yarn add react-thanos
```

## Usage

```javascript
import { Thanos } from "react-thanos";

<Thanos
  onSnap={() => console.log("I love you 3000! Decimate...") }
  onSnapReverse={() => console.log("Avengers assemble!") }
/>
```

## Examples
See [examples](https://github.com/codeshifu/react-thanos/tree/master/examples) folder

Live demo https://react-thanos.netlify.com/

## API (props)

### onSnap()

Type: `function`

Called after Thanos snaps his finger

### onSnapReverse()

Type: `function`

Called after Thanos undo/reverse snap


## Inspiration
This project was inspired by the famous Google's [Thanos easter egg](http://google.com/search?q=thanos) released
shortly after [Avengers: Endgame](https://www.imdb.com/title/tt4154796/) premiered in cinemas.

## Credits
[Assets](https://github.com/codeshifu/react-thanos/tree/master/lib/assets)
used in this project were downloaded from Google. I own no rights to them.

## Contributing
Feel free to send in contributions of any kind. All are welcome 🙂

## License
**react-thanos** is licensed under [MIT](https://github.com/codeshifu/react-thanos/blob/master/license)
