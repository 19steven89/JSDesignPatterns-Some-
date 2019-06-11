const PageState = function(){
    let currState = new homeState(this);

    this.init = function(){
        this.change(new homeState);
    }

    this.change = function(state){
        currState = state;
    } 
};

// create home state
const homeState = function(page){
    document.querySelector("#heading").textContent = null;
    document.querySelector("#heading").innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `;
};
// create about state:
const aboutState = function(page){
    document.querySelector("#heading").textContent = `About Us`;
    document.querySelector("#heading").innerHTML = `
        <p>This is the about page</p>
    `;
}

// create contact state:
const contactState = function(page){
    document.querySelector("#heading").textContent = `Contact Us`;
    document.querySelector("#heading").innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
}

// Instantiate Page state
const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
    page.change(new homeState);
    e.preventDefault();
});

about.addEventListener("click", (e) => {
    page.change(new aboutState);
    e.preventDefault();
});

contact.addEventListener("click", (e) => {
    page.change(new contactState);
    e.preventDefault();
});


