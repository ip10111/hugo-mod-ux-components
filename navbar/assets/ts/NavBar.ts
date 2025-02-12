class NavBar {
    private navbar: HTMLElement;
    private fixedTopClass: string;
    private scrollThreshold: number;

    constructor(navbarSelector: string, fixedTopClass: string, scrollThreshold: number) {
        this.navbar = document.querySelector(navbarSelector) as HTMLElement;
        this.fixedTopClass = fixedTopClass;
        this.scrollThreshold = scrollThreshold;

        this.init();
    }

    private init() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    private handleScroll() {
        if (window.scrollY > this.scrollThreshold) {
            this.navbar.classList.add(this.fixedTopClass);
        } else {
            this.navbar.classList.remove(this.fixedTopClass);
        }
    }
}

// Initialize the NavBar class when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const navbar = new NavBar('.navbar', 'fixed-top', 50);
});
