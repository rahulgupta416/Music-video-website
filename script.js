let listvideo = document.querySelectorAll('.video .vid');
let mainvideo= document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .title');
listvideo.foreach(iframe =>{
    iframe.onclick=()=>{
        listvideo.foreach(vid => vid.classlist.remove('.active'));
         vid.classlist.add('.active');
         if(iframe.classlist.contains('.active')){
             let src = iframe.children[0].getattribute('src');
         };
    };
});

<div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sLykke8q2ls" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    </div>