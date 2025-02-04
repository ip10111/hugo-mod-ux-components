class ReadingProgressBar {
    private element: HTMLElement;

    constructor(progressBarElement: HTMLElement) {
        this.element = progressBarElement;
        this.init();
    }

    private init() {
        window.addEventListener('scroll', this.updateProgressBar.bind(this));
    }

    private updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        ) - window.innerHeight;;

        const progress = (scrollTop / scrollHeight) * 100;
        this.element.style.width = `${progress}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const readingProgressBarElement = document.getElementById("reading-progress-bar");
    readingProgressBarElement ? new ReadingProgressBar(readingProgressBarElement) : console.error("Reading progress bar id not found");
});