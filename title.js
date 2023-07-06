function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / FastBomber v1.0 - github.com/ploxerets";
    } else {
        process.stdout.write('\x1b]2;' + x + " / FastBomber v1.0 - github.com/ploxerets" + '\x1b\x5c');
    }
}

module.exports = console_title;
