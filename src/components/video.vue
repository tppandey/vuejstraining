<template>
    <div>

        <div syle="position absolute">
            <video style="width:100%;height:100vh" poster="some url img"></video>
            <div class="controller">
                <div> play</div>
                <div>=</div>
                <div>=</div>
                <div></div>
                <div></div>
                <div>seek bar</div>

            </div>

            <div>
                meta data
            </div>
        </div>
    </div>
</template>

<script>
export default {




/*
1. icon top of the player  with design css ==   ===>  1

2. meta data top of the player == 1 <left with top>   ===>  1

3. poster of the player  ===>  1

4. play, pause, forward and backward   ===>  1

5. DRM and non DRM  = widewine - LG and samsung

6. DRM - many msetup with licence and token

7. non DRM- basic setup   ===>  1

8. base - HTML5 player - <video> tag - style and design

9. drm and non DRM -  MPD format to mp4 -- give to HTML5 

10- style abolute of the css of HTML5- icons, seek bar, meta data, use css2 dont use. flex box


11 , HTML5 player and shaka player setup  -  ===>  1



<video width="100%" style="height:100vh" >
  <source src="movie.mp4" type="video/mp4">
</video>

https://shaka-player-demo.appspot.com/docs/api/tutorial-basic-usage.html

npm i shaka-player



 document.getElementById('video').play()
Promise {<pending>}
 document.getElementById('video').pause()
undefined
 document.getElementById('video').currenTime
undefined
 document.getElementById('video').currentTime
22.189242
 document.getElementById('video').currentTime =  document.getElementById('video').currentTime + 10
32.189242
 document.getElementById('video').currentTime =  document.getElementById('video').currentTime - 10
22.189242




https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video


*/





}
</script>

<style>

</style>