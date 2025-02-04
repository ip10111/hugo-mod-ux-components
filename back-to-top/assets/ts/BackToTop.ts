class BackToTop {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.init();
    }

    private init() {
        this.showOnScroll(20);
        this.element.addEventListener("click", this.backToTop);
    }

    private showOnScroll(scrollDistance: number) {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > scrollDistance ||
                document.documentElement.scrollTop > scrollDistance
            ) {
                this.element.style.display = "flex";
            } else {
                this.element.style.display = "none";
            }
        });
    }

    private backToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopElement = document.getElementById("btn-back-to-top");
    backToTopElement ? new BackToTop(backToTopElement) : console.error("Back to top button id not found");
});
