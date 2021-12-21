<template>
    <div class="card-wrapper">
        <div class="card"> 
            <img class="card-image" src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg">
            <h3>Card Title Template</h3>
            <p>Author: Name Template</p>
            <p>Created: Time Template</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .card-wrapper {
        height: 700px;
        width: 33.333%;
    }
    .card {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 15px;  
    }
    .card-image {
        height: 500px;
        width: 100%;
    }
    @media (max-width: 1250px) {
        .card-wrapper {
            width: 50%;
        }
    }
    @media (max-width: 850px) {
        .card-wrapper {
            width: 100%;
        }
    }
 
</style>