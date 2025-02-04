class BackToTopPlus {
    private button: HTMLButtonElement;
    private progressCircle: SVGCircleElement;
    private totalHeight: number;
    private progressLength: number;

    constructor(buttonId: string, progressId: string) {
        this.button = document.getElementById(buttonId) as HTMLButtonElement;
        this.progressCircle = document.getElementById(progressId) as SVGCircleElement;
        this.totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.progressLength = 2 * Math.PI * parseFloat(this.progressCircle.getAttribute('r')!);

        this.progressCircle.style.strokeDasharray = `${this.progressLength}`;
        this.progressCircle.style.strokeDashoffset = `${this.progressLength}`;

        window.onscroll = this.onScroll.bind(this);
        this.button.onclick = this.scrollToTop.bind(this);
    }

    private onScroll(): void {
        const scrolled = (window.scrollY / this.totalHeight) * this.progressLength;
        this.progressCircle.style.strokeDashoffset = `${this.progressLength - scrolled}`;

        if (window.scrollY > 100) {
            this.button.style.opacity = '1'; // Fade in
        } else {
            this.button.style.opacity = '0'; // Fade out
        }
    }

    private scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BackToTopPlus('backToTop', 'progress');
});
