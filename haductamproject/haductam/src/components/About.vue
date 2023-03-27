<template>
    <section class="testimonials1 cid-qYkT0Acz2C" id="testimonials01-2b">
        <div class="container justify-content-center">
            <div class="row justify-content-center">
                <div class="col-sm-10 col-lg-8  align-center">
                    <h3 class="mbr-section-title mbr-fonts-style mb-5 align-center mbr-normal display-2">
                        <div class="title">What Our Clients Say </div>
                    </h3>
                    <h4 class="mbr-section-subtitle mbr-fonts-style mb-4 align-center display-5">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae</h4>
                </div>
            </div>
            <div class="row justify-content-center pt-5">
                <div class="col-xs-12 col-lg-4">
                    <div class="mbr-testimonial card mbr-testimonial-lg">
                        <div class="card-block mbr-fonts-style display-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae
                                provident pariatur, amet aspernatur et cupiditate eos.</p>
                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img">
                                <img height="250" src="https://i.pinimg.com/originals/8b/2b/05/8b2b05b9020ef2b3fda1a379851bde0f.gif">
                            </div>
                            <div class="name-wrap">
                                <p class="mbr-author-name mbr-normal mbr-fonts-style display-7"> Robert Lindstrom</p>
                                <p class="mbr-text mbr-author-desc mbr-normal mbr-fonts-style display-4"> Sold Apartment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4">
                    <div class="mbr-testimonial card mbr-testimonial-lg">
                        <div class="card-block mbr-fonts-style display-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae
                                provident pariatur, amet aspernatur et cupiditate eos.</p>
                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img">
                                <img height="250" src="https://i.pinimg.com/originals/8d/d1/da/8dd1daafb0ef019e69276b1ce0bae4a1.gif">
                            </div>
                            <div class="name-wrap">
                                <p class="mbr-author-name mbr-normal mbr-fonts-style display-7"> Jennie Wilson</p>
                                <p class="mbr-text mbr-author-desc mbr-normal mbr-fonts-style display-4"> Rented Apartment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4">
                    <div class="mbr-testimonial card mbr-testimonial-lg">
                        <div class="card-block mbr-fonts-style display-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae
                                provident pariatur, amet aspernatur et cupiditate eos.</p>
                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img">
                                <img height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROph1Gzx_aZF-TNKYc8ko1AMOaGhmzbS_x3yQ2sb9A9UY55aMvoxhvXDiN93_qSyMS1go&usqp=CAU">
                            </div>
                            <div class="name-wrap">
                                <p class="mbr-author-name mbr-normal mbr-fonts-style display-7"> Thomas Smith</p>
                                <p class="mbr-text mbr-author-desc mbr-normal mbr-fonts-style display-4"> Bought House</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AboutPage',
    mounted() {
        document.title = "About page"
    },
}
</script>
<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

.column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(175, 56, 56, 0.2);
    margin: 8px;
}

.about-section {
    padding: 50px;
    text-align: center;
    background-color: #b62929;
    color: white;
}

.container {
    padding: 0 16px;
}

.container::after,
.row::after {
    content: "";
    clear: both;
    display: table;
}

.title {
    color: rgb(155, 48, 48);
}

.button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #b62929;
    text-align: center;
    cursor: pointer;
    width: 100%;
}

.button:hover {
    background-color: #555;
}

@media screen and (max-width: 650px) {
    .column {
        width: 100%;
        display: block;
    }
}
</style>
