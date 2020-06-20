# mx

### Resize images from the terminal.

First create an alias for the script inside of '~/.bash_profile' as follows:

```bash
alias mx='node /Users/jake/mx/index.js'
```

This will now allow you to resize any image by entering 'mx' followed by a relative path to the image and an option parameter. An example would look like

```bash
mx ./test.jpg w200
```

mx - refers to your newly created alias and will run: 'node /Users/jake/mx/index.js'

./test.jpg - Refers to the relative path to the image you want to resize

w200 is the option parameter. You can choose 'w' for width or 'h' for height following the size you want that dimension to be. The image will maintain it's height to width proportions.
