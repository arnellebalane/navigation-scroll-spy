<template>
    <div id="app" class="app">
        <div class="wrapper">
            <aside>
                <nav ref="nav">
                    <a href="#section-one" data-label="1" :class="navLinkClass('section-one')">Section One</a>
                    <a href="#section-two" data-label="2" :class="navLinkClass('section-two')">Section Two</a>
                    <a href="#section-three" data-label="3" :class="navLinkClass('section-three')">Section Three</a>
                    <a href="#section-four" data-label="4" :class="navLinkClass('section-four')">Section Four</a>
                    <a href="#section-five" data-label="5" :class="navLinkClass('section-five')">Section Five</a>
                    <a href="#section-six" data-label="6" :class="navLinkClass('section-six')">Section Six</a>
                    <a href="#section-seven" data-label="7" :class="navLinkClass('section-seven')">Section Seven</a>
                    <a href="#section-eight" data-label="8" :class="navLinkClass('section-eight')">Section Eight</a>
                </nav>
            </aside>

            <main ref="container">
                <h1>Navigation Scroll Spy</h1>
                <a
                    href="https://github.com/arnellebalane/navigation-scroll-spy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/arnellebalane/navigation-scroll-spy
                </a>

                <section id="section-one" v-intersect="onIntersect">
                    <h1>Section One</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error accusantium amet,
                        neque nisi obcaecati est placeat deserunt, aperiam quis voluptatibus, eligendi velit ipsa
                        laborum sed dicta animi quaerat necessitatibus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti totam dicta, perferendis
                        adipisci possimus, unde, corporis odio atque praesentium, voluptate sequi eius nesciunt quas
                        sunt ut mollitia rem dolores! Vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam cumque eaque quibusdam, illo
                        provident, ut minima exercitationem autem, eveniet fuga necessitatibus vel ipsa ad excepturi
                        repudiandae, maiores. Facere aut, labore.
                    </p>
                </section>

                <section id="section-two" v-intersect="onIntersect">
                    <h1>Section Two</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea culpa temporibus deleniti,
                        perferendis voluptatem totam maxime hic ut. Architecto modi veritatis odit odio debitis illum
                        harum velit possimus porro, eveniet.
                    </p>
                    <img src="./images/01.jpg" alt="First Image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, corporis, inventore. Voluptas
                        commodi et dignissimos eveniet porro voluptatem necessitatibus dolor quas eos explicabo
                        repellat, consequuntur nihil. Aspernatur voluptatibus temporibus harum!
                    </p>
                </section>

                <section id="section-three" v-intersect="onIntersect">
                    <h1>Section Three</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque natus iure quisquam
                        velit, in odit nemo et aliquam tempora quae laudantium impedit nam iusto voluptates. Error
                        obcaecati impedit incidunt!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit animi aliquam, cupiditate numquam
                        quod ipsa illo, atque cum nesciunt harum odit eveniet quidem saepe nam qui maxime, eum quisquam
                        vitae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit debitis autem veritatis alias
                        enim repellendus porro, unde tempora beatae quis, quibusdam, dicta commodi sed dignissimos
                        deleniti illum delectus ex placeat.
                    </p>
                </section>

                <section id="section-four" v-intersect="onIntersect">
                    <h1>Section Four</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id esse excepturi, ut, veritatis
                        voluptatibus sunt vero rerum harum illum amet dignissimos, totam voluptatum, eos facilis minus
                        maiores. Dignissimos, unde, aliquid!
                    </p>
                    <div class="images">
                        <img src="./images/02.jpg" alt="Second Image">
                        <img src="./images/03.jpg" alt="Third Image">
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe culpa explicabo excepturi, eaque
                        ducimus aliquid repellendus deserunt unde, aspernatur minima beatae provident consequatur error
                        reprehenderit necessitatibus impedit veritatis? Amet, id!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus magnam saepe, ex, porro
                        vel, harum necessitatibus natus autem nulla quidem deserunt! Assumenda ipsam distinctio velit
                        rerum sit corporis reiciendis nostrum.
                    </p>
                </section>

                <section id="section-five" v-intersect="onIntersect">
                    <h1>Section Five</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempore id, officiis rerum facere
                        eos enim mollitia et, tempora eligendi magnam laudantium assumenda aut ab dicta cum. Maxime,
                        quia, eum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt deleniti voluptatibus
                        obcaecati, voluptatem modi, sed blanditiis consectetur corporis accusantium reprehenderit, in
                        consequuntur adipisci mollitia repellendus suscipit, voluptas. Tempore, eum, iure!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi, velit, nesciunt amet
                        numquam facilis dolore consequuntur nemo quae. Illum tempore voluptatibus modi, iusto quasi
                        libero optio at eum, incidunt.
                    </p>
                </section>

                <section id="section-six" v-intersect="onIntersect">
                    <h1>Section Six</h1>

                    <img src="./images/04.jpg" alt="Fourth Image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, debitis soluta nihil fugiat libero
                        corporis ipsum dolor hic illo at, explicabo, quis ex esse optio molestiae temporibus numquam
                        officiis possimus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatibus, nobis! Placeat
                        voluptates, repudiandae consequatur deleniti error ut rem nulla similique quia sapiente animi
                        eveniet provident numquam magni, necessitatibus rerum.
                    </p>
                </section>

                <section id="section-seven" v-intersect="onIntersect">
                    <h1>Section Seven</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam quae, culpa. Amet ea
                        quidem, odit minima repellat nulla molestias sunt voluptates quibusdam consequuntur nemo
                        necessitatibus, harum. Odit, quia, natus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit libero a est voluptas similique
                        totam maxime cumque cum molestias dignissimos, tempore eius architecto aut numquam, sint
                        delectus perferendis facere explicabo!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est impedit a, dolor asperiores.
                        Libero autem nemo quis facere velit, illo laborum molestias officia doloribus aperiam. Nesciunt
                        ratione consectetur error quibusdam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste distinctio quibusdam illum
                        recusandae vitae esse eveniet neque quos similique culpa autem cupiditate quia, tempore sed
                        accusamus asperiores ipsa optio harum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eius sapiente voluptas expedita
                        consectetur veritatis labore amet distinctio, magnam tempore, nisi libero corporis facere
                        accusantium doloribus laborum officia iusto totam!
                    </p>
                </section>

                <section id="section-eight" v-intersect="onIntersect">
                    <h1>Section Eight</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, illum. Animi quidem
                        molestias tenetur cupiditate voluptatum, autem suscipit aut pariatur voluptatibus maiores atque
                        saepe, esse nobis libero voluptates quia! Esse.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae qui hic ad aliquid reiciendis
                        enim asperiores, dolore corrupti reprehenderit commodi at laudantium quas maxime deserunt
                        adipisci, perferendis excepturi nisi ipsa.
                    </p>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
import stickyfill from 'stickyfilljs';

export default {
    name: 'App',

    data() {
        return {
            visibleSections: []
        };
    },

    computed: {
        highlighted() {
            return this.visibleSections[0];
        }
    },

    watch: {
        highlighted(value) {
            const label = value.querySelector('h1').textContent;
            document.title = label;
        }
    },

    mounted() {
        stickyfill.add(this.$refs.nav);
    },

    methods: {
        onIntersect({target, intersectionRatio}) {
            if (intersectionRatio > 0) {
                const sections = [...this.$refs.container.children];
                const highlighted = sections.indexOf(this.highlighted);
                const targetted = sections.indexOf(target);

                if (highlighted > targetted) {
                    this.visibleSections = [target, ...this.visibleSections];
                } else {
                    this.visibleSections = [...this.visibleSections, target];
                }
            } else {
                this.visibleSections = this.visibleSections.filter(s => s !== target);
            }
        },

        navLinkClass(value) {
            return this.highlighted && this.highlighted.id === value
                ? 'highlight'
                : null;
        }
    }
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

@media all and (min-width: 600px) {
    .wrapper {
        display: flex;
        width: 90vw;
    }
}

aside {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 8px 10vw;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}

@media all and (min-width: 600px) {
    aside {
        flex-shrink: 0;
        position: unset;
        padding: 50px 0;
        border-bottom: unset;
        margin-right: 30px;
    }
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

@media all and (min-width: 600px) {
    nav {
        display: block;
        margin-top: 10em;
        top: calc(10em + 50px);
    }
}

nav a {
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-size: 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: #888;
}

nav a::before {
    content: attr(data-label);
    font-size: 14px;
    text-align: center;
    line-height: 2rem;
}

@media all and (min-width: 600px) {
    nav a {
        width: unset;
        height: unset;
        border-radius: unset;
        padding: 8px 16px;
        font-size: 14px;
        text-align: unset;
    }

    nav a::before {
        display: none;
    }
}

nav a:hover,
nav a:focus {
    color: #000;
}

nav a.highlight {
    color: #000;
    background-color: #ffeb3b;
}

main {
    padding: 10px 10vw;
    padding-top: 48px;
}

@media all and (min-width: 600px) {
    main {
        flex-grow: 1;
        padding: 50px;
        padding-right: 0;
    }
}

section {
    margin: 3em 0;
}

section img {
    display: block;
    width: 90%;
    border-radius: 5px;
    margin: 2em auto;
}

section .images {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 2em auto;
}

section .images img {
    width: 50%;
    margin: 0 4px;
}
</style>
