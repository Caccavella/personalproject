module.exports = () => {
    document.getElementById('target').onclick = () => {
        var wnd = window.open(this.state.urls, width=100, height=100);
        setTimeout(() => {
            wnd.close();
        }, 3000)
    }
    return false;
}