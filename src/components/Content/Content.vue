<template>
  <div>
      <section class="Showcase">
        <div class="container grid">
            <div class="Showcase-text">
                <h1> Dicky Twister</h1>
                <p>It's too cold outside. Come in and sit down
                </p>
                <a href="features.html" class="btn btn-outline">Read More</a>
            </div>

            <div class="Showcase-from card">
                <h2>Request a Demo</h2>
                <div>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name or Email" required v-model="name" value>
                    </div>
                    <div class="form-control">
                        <input type="text" name="password" placeholder="password know?" required v-model="password" value>
                    </div>
                    <div class="form-control">
                        <input type="text" name="verification" placeholder="please enter verification code" required>
                    </div>
                    <input type="button" value="submit" class="btn btn-p" onclick=btn()> 
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password:"",
        }
    },
    methods: {
        btn() {
            this.axios.post("",{
                name     : this.name,
                password : this.password,
            })
        }
    }
}
</script>

<style>
.Showcase {
    height: 400px;
    background-color: var(--primary-color);
    color: #fff;
    position: relative;

}

.Showcase h1{
    font-size: 40px;
}

.Showcase p{
    margin: 20px 0;
}

.Showcase .grid{
    overflow: visible;
    grid-template-columns: 55% auto;
    gap: 30px;
}

.Showcase-text{
    animation: slidenInFromLeft 1s ease-in;
}

.Showcase-from{
    position: relative;
    top: 60px;
    height: 350px;
    width: 400px;
    padding: 40px;
    z-index: 100;
    justify-self: flex-end;
    animation: slidenInFromRight 1s ease-in;
}

.Showcase-from .form-control{
    margin: 30px 0;
}

.Showcase-from input[type='text'],
.Showcase-from input[type='email']{
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 3px;
    font-size: 16px;
}

.Showcase-from input:focus{
    outline: none;
}
.Showcase::before,
.Showcase::after{
    content:'';
    position: absolute;
    height: 100px;
    bottom: -70px;
    right: 0;
    left: 0;
    background: #fff;
    transform: skewY(-3deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
}
</style>