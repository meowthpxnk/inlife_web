<template lang="pug">
footer
    div.bubbles(v-if="false")
        - for (var i = 0; i < 128; i++) //Small numbers looks nice too
            div.bubble(style=`--size:${2+Math.random()*4}rem; --distance:${6+Math.random()*4}rem; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`)
    div.additional-block-container
        ul.info
          li
            img(src='@/assets/icons/phone.png')
            p +7 (999) - 999 - 99 - 99
          li
            img(src='@/assets/icons/mail.png')
            p inlife@gmail.com
svg(style="position:fixed; top:100vh")
    defs
        filter#blob
            feGaussianBlur(in="SourceGraphic" stdDeviation="10" result="blur")
            feColorMatrix(in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob")
            //feComposite(in="SourceGraphic" in2="blob" operator="atop") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
body {
    display:grid;
    grid-template-rows: 1fr 10rem auto;
    grid-template-areas:"main" "." "footer";
    overflow-x:hidden;
    background:#F5F7FA;
    min-height:100vh;
    font-family: 'Open Sans', sans-serif;
    footer {
        z-index: 1;
        display:grid;
        position: relative;
        grid-area: footer;
        // height:50px;
        .bubbles {
            position: absolute;
            top:0;
            left:0;
            right:0;
            height:1rem;
            background:var(--bg-color);
            filter:url("#blob");
            .bubble {
                position: absolute;
                left:var(--position, 50%);
                background:var(--bg-color);
                border-radius:100%;
                animation:bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
                    bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
                transform:translate(-50%, 100%);
            }
        }
        .additional-block-container {
            z-index: 2;
            display:flex;
            grid-template-columns: 1fr auto;
            // grid-gap: 4rem;
            height: 80px;
            padding:0;
            background:var(--bg-color);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 15px 0px
            // a, p {
            //     color:#F5F7FA;
            //     text-decoration:none;
            // }
            // b {
            //     color:white;
            // }
            // p {
            //     margin:0;
            //     font-size:.75rem;
            // }
            // >div {
            //     display:flex;
            //     flex-direction:column;
            //     justify-content: center;
            //     >div {
            //         margin:0.25rem 0;
            //         >* {
            //             margin-right:.5rem;
            //         }
            //     }
            //     .image {
            //         align-self: center;
            //         width:4rem;
            //         height:4rem;
            //         margin:0.25rem 0;
            //         background-size: cover;
            //         background-position: center;
            //     }
            // }
        }
    }
}

@keyframes bubble-size {
    0%, 75% {
        width:var(--size, 4rem);
        height:var(--size, 4rem);
    }
    100% {
        width:0rem;
        height:0rem;
    }
}
@keyframes bubble-move {
    0% {
        bottom:-4rem;
    }
    100% {
        bottom:var(--distance, 10rem);
    }
}

</style>
